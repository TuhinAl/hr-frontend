import {asapScheduler,asyncScheduler,combineLatest,EMPTY,isObservable,MonoTypeOperatorFunction,Observable,of,
  queueScheduler,ReplaySubject,scheduled,Subscription,throwError} from 'rxjs';
import {catchError,distinctUntilChanged,map,observeOn,shareReplay,take,takeUntil,
  tap, withLatestFrom} from 'rxjs/operators';

import {inject,Inject,Injectable,InjectionToken,isDevMode,OnDestroy,Optional,Provider,Type} from '@angular/core';

export interface SelectConfig {
  debounce?: boolean;
}

export type SelectorResults<Selectors extends Observable<unknown>[]> = {
  [Key in keyof Selectors]: Selectors[Key] extends Observable<infer U> ? U : never;
};

export type Projector<Selectors extends Observable<unknown>[], Result> = (...args: SelectorResults<Selectors>) => Result;

@Injectable()
export class SomchCompStore<T extends object> implements OnDestroy {

  private readonly destroySubject$ = new ReplaySubject<void>(1);

  readonly destroy$ = this.destroySubject$.asObservable();

  private readonly stateSubject$ = new ReplaySubject<T>(1);

  private isInitialized = false;

  readonly state$: Observable<T> = this.select((s) => s);

  private ɵhasProvider = false;

  constructor(@Optional() @Inject(new InjectionToken('component-store Initial State')) defaultState?: T) {
    if (defaultState) {
      this.initState(defaultState);
    }
    this.checkProviderForHooks();
  }

  ngOnDestroy() {
    this.stateSubject$.complete();
    this.destroySubject$.next();
  }

  updater<
    ProvidedType = void,
    OriginType = ProvidedType,
    ValueType = OriginType,
    ReturnType = OriginType extends void
      ? () => void
      : (observableOrValue: ValueType | Observable<ValueType>) => Subscription
    >(updaterFn: (state: T, value: OriginType) => T): ReturnType {
    return ( (observableOrValue?: OriginType | Observable<OriginType>): Subscription => {
      let isSyncUpdate = true;
      let syncError: unknown;
      const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
      const subscription = observable$
        .pipe(
          observeOn(queueScheduler),
          tap(() => this.assertStateIsInitialized()),
          withLatestFrom(this.stateSubject$),
          map(([value, currentState]) => updaterFn(currentState, value!)),
          tap((newState) => this.stateSubject$.next(newState)),
          catchError((error: unknown) => {
            if (isSyncUpdate) {
              syncError = error;
              return EMPTY;
            }
            return throwError(() => error);
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
      if (syncError) {
        throw syncError;
      }
      isSyncUpdate = false;
      return subscription;
    }) as unknown as ReturnType;
  }

  private initState(state: T): void {
    scheduled([state], queueScheduler).subscribe((s) => {
      this.isInitialized = true;
      this.stateSubject$.next(s);
    });
  }

  setState(stateOrUpdaterFn: T | ((state: T) => T)): void {
    if (typeof stateOrUpdaterFn !== 'function') {
      this.initState(stateOrUpdaterFn);
    } else {
      this.updater(stateOrUpdaterFn as (state: T) => T)();
    }
  }

  patchState(partialStateOrUpdaterFn: | Partial<T> | Observable<Partial<T>> | ((state: T) => Partial<T>)): void {
    const patchedState =
      typeof partialStateOrUpdaterFn === 'function' ? partialStateOrUpdaterFn(this.get()) : partialStateOrUpdaterFn;

    this.updater((state, partialState: Partial<T>) => ({...state, ...partialState,}))(patchedState);
  }

  protected get(): T;

  protected get<R>(projector: (s: T) => R): R;

  protected get<R>(projector?: (s: T) => R): R | T {
    this.assertStateIsInitialized();
    let value: R | T;
    this.stateSubject$.pipe(take(1)).subscribe((state) => {
      value = projector ? projector(state) : state;
    });
    return value!;
  }

  select<Result>(projector: (s: T) => Result, config?: SelectConfig): Observable<Result>;

  select<Selectors extends Observable<unknown>[], Result>(
    ...args: [...selectors: Selectors, projector: Projector<Selectors, Result>]): Observable<Result>;

  select<Selectors extends Observable<unknown>[], Result>(
    ...args: [...selectors: Selectors, projector: Projector<Selectors, Result>, config: SelectConfig]
  ): Observable<Result>;

  select<Selectors extends Array<Observable<unknown> | SelectConfig | ProjectorFn>, Result,
    ProjectorFn = (...a: unknown[]) => Result>(...args: Selectors): Observable<Result> {
    const { observables, projector, config } = processSelectorArgs<Selectors, Result>(args);

    let observable$: Observable<Result>;
    if (observables.length === 0) {
      observable$ = this.stateSubject$.pipe(
        config.debounce ? debounceSync() : (source$) => source$,
        map((state) => projector(state))
      );
    } else {
      observable$ = combineLatest(observables).pipe(
        config.debounce ? debounceSync() : (source$) => source$,
        map((projectorArgs) => projector(...projectorArgs))
      );
    }

    return observable$.pipe(
      distinctUntilChanged(),
      shareReplay({refCount: true, bufferSize: 1,}),
      takeUntil(this.destroy$)
    );
  }

  private checkProviderForHooks() {
    asyncScheduler.schedule(() => {
      if (isDevMode() && (isOnStoreInitDefined(this) || isOnStateInitDefined(this)) && !this.ɵhasProvider) {
        const warnings = [isOnStoreInitDefined(this) ? 'OnStoreInit' : '',
          isOnStateInitDefined(this) ? 'OnStateInit' : '',].filter((defined) => defined);
        console.warn(
          `component-store: ${this.constructor.name} has the ${warnings.join(' and ')} ` +
          'lifecycle hook(s) implemented without being provided using the ' +
          `provideSomchCompStore(${this.constructor.name}) function. ` +
          `To resolve this, provide the component store via provideSomchCompStore(${this.constructor.name})`
        );
      }
    });
  }

  private assertStateIsInitialized(): void {
    if (!this.isInitialized) {
      throw new Error(
        `${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`
      );
    }
  }
}

function processSelectorArgs<
  Selectors extends Array<Observable<unknown> | SelectConfig | ProjectorFn>,
  Result,
  ProjectorFn = (...a: unknown[]) => Result>(args: Selectors): {
  observables: Observable<unknown>[];
  projector: ProjectorFn;
  config: Required<SelectConfig>;
} {
  const selectorArgs = Array.from(args);
  let config: Required<SelectConfig> = { debounce: false };
  let projector: ProjectorFn;
  const projectorOrConfig = selectorArgs.pop() as ProjectorFn | SelectConfig;

  if (typeof projectorOrConfig !== 'function') {
    config = { ...config, ...projectorOrConfig };
    projector = selectorArgs.pop() as ProjectorFn;
  } else {
    projector = projectorOrConfig;
  }
  const observables = selectorArgs as Observable<unknown>[];
  return {observables, projector, config,};
}

export function storeUtil<T, E = unknown>(
  nextFn: (next: T) => void,
  errorFn: (error: E) => void,
  completeFn?: () => void
): (source: Observable<T>) => Observable<T> {
  return (source) =>
    source.pipe(
      tap({
        next: nextFn,
        complete: completeFn,
      }),
      catchError((e) => {
        errorFn(e);
        return EMPTY;
      })
    );
}

export function debounceSync<T>(): MonoTypeOperatorFunction<T> {
  return (source) =>
    new Observable<T>((observer) => {
      let actionSubscription: Subscription | undefined;
      let actionValue: T | undefined;
      const rootSubscription = new Subscription();
      rootSubscription.add(
        source.subscribe({
          complete: () => {
            if (actionSubscription) {
              observer.next(actionValue);
            }
            observer.complete();
          },
          error: (error) => {
            observer.error(error);
          },
          next: (value) => {
            actionValue = value;
            if (!actionSubscription) {
              actionSubscription = asapScheduler.schedule(() => {
                observer.next(actionValue);
                actionSubscription = undefined;
              });
              rootSubscription.add(actionSubscription);
            }
          },
        })
      );
      return rootSubscription;
    });
}

export interface OnStoreInit {
  readonly somchOnStoreInit: () => void;
}

export interface OnStateInit {
  readonly somchOnStateInit: () => void;
}

export function isOnStoreInitDefined(cs: unknown): cs is OnStoreInit {
  return typeof (cs as OnStoreInit).somchOnStoreInit === 'function';
}

export function isOnStateInitDefined(cs: unknown): cs is OnStateInit {
  return typeof (cs as OnStateInit).somchOnStateInit === 'function';
}

export function provideSomchCompStore<T extends object>(componentStoreClass: Type<SomchCompStore<T>>): Provider[] {

  const CS_WITH_HOOKS = new InjectionToken<SomchCompStore<T>>('ComponentStore with Hooks');

  return [
    { provide: CS_WITH_HOOKS, useClass: componentStoreClass },
    {
      provide: componentStoreClass,
      useFactory: () => {
        const componentStore = inject(CS_WITH_HOOKS);
        componentStore['ɵhasProvider'] = true;
        if (isOnStoreInitDefined(componentStore)) {
          componentStore.somchOnStoreInit();
        }
        if (isOnStateInitDefined(componentStore)) {
          componentStore.state$
            .pipe(take(1))
            .subscribe(() => componentStore.somchOnStateInit());
        }
        return componentStore;
      },
    },
  ];
}

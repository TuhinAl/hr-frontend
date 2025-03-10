import {map, Observable, ReplaySubject} from "rxjs";

export class StateVersion{
  readonly version: number = (new Date().getTime() + Math.floor(100000000 + Math.random() * 900000000)) ;
}

//un-opinionated state management library
export class RxFluxStore<T extends StateVersion>{

  private _initialState: T;
  private _currentState:T;
  private _prevState:T;

  private _stateRs: ReplaySubject<T>= new ReplaySubject<T>(1);
  private _prevStateRs: ReplaySubject<T>= new ReplaySubject<T>(1);

  private _state$: Observable<T>= this._stateRs.asObservable();
  private _prevState$: Observable<T>= this._prevStateRs.asObservable();

  // Object.assign and spread operator does not work on deep copy
  constructor(initialState: T) {
    this._initialState = JSON.parse(JSON.stringify(initialState));
    this._currentState = JSON.parse(JSON.stringify(initialState));
    this._stateRs.next(JSON.parse(JSON.stringify(initialState)));
  }

  setState(t:T){
    this._prevState = JSON.parse(JSON.stringify(this._currentState));
    this._currentState = JSON.parse(JSON.stringify(t));
    this._stateRs.next(JSON.parse(JSON.stringify(t)));
  }

  set state(t:T){
    this._prevState = JSON.parse(JSON.stringify(this._currentState));
    this._currentState = JSON.parse(JSON.stringify(t));
    this._stateRs.next(JSON.parse(JSON.stringify(t)));
  }

  get state():T{  return JSON.parse(JSON.stringify(this._currentState));  }
  getState():T{  return JSON.parse(JSON.stringify(this._currentState));  }

  get state$():Observable<T>{  return this._state$;  }
  getState$():Observable<T>{
    return this._state$;
    //return this._state$.pipe(map(e=> JSON.parse(JSON.stringify(e))));
  }

  get prevState(): T {  return JSON.parse(JSON.stringify(this._prevState));  }
  getPrevState(): T {  return JSON.parse(JSON.stringify(this._prevState));  }

  get prevState$():Observable<T>{  return this._prevState$;  }
  getPrevState$():Observable<T>{  return this._prevState$;  }

  updateState(t:T):void{
    this._prevState = JSON.parse(JSON.stringify(this._currentState))
    this._currentState = JSON.parse(JSON.stringify(t));
    this._stateRs.next({...t})
  }

  resetState():void{
    this._stateRs.next({...this._initialState});
  }

  completeState():void{
    this._stateRs.complete()
  }

  unsubscribeState():void{
    this._stateRs.unsubscribe()
  }

}


import {from, Observable, ObservedValueOf, of} from 'rxjs';

/**
 * observable
 */
export function getObservable(): Observable<number> {
  return new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 3000);
  });
}

export function getSingleObservable(): Observable<Array<string>> {
  return of(['1', '2']);
}

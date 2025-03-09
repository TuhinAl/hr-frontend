import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class ErrorMessageService {

  flagSubj = new ReplaySubject<boolean>(0);

  constructor() {
  }

}

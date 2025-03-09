import {Pageable} from './pageable';
import {Sort} from './sort';

export class Page<T> {

  content: T[] = [];
  pageable: Pageable = new Pageable();
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;

  sort: Sort = new Sort();

  first: boolean;
  numberOfElements: number;
  empty: boolean;

  public getStart(size:number) : number{
    return this.content.length > 0 ? (this.number * size) + 1 : 0
  }

  public getEnd(size:number) : number{
    return (this.number * size) + this.content.length;
  }


  /*public constructor(o?: Partial<Page<T>>) {
    Object.assign(this, o);
  }*/
}


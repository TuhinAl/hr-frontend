import {EmptyException} from '../exception/empty-exception';
import {UndefinedTypeException} from '../exception/undefined-type-exception';
import {MismatchTypeException} from '../exception/mismatch-type-exception';
import {UnExpectedTypeException} from '../exception/unexpected-type-exception';

/**
 * is variable Array
 */
export function isArray(v : any): boolean {
  return Array.isArray(v);
}

/**
 * throw Error Exception if it is not array
 */
export function onlyArray(v : any): boolean {
  if (typeof v === 'undefined'){
    throw new UndefinedTypeException();
  }
  if (!isArray(v)){
    throw new UnExpectedTypeException('only array type allowed but found other type');
  }
  return true;
}

/**
 * throw onlyion if it is not array and have at least one element
 */
export function onlyPresentArray(v : Array<any>): boolean {
  onlyArray(v);
  if(isEmptyArray(v)){
    throw new EmptyException();
  }
  return true;
}


/**
 * not undefined, not null, and not empty Array
 * @param v example []
 * @return example true
 */
export function isEmptyArray(v: Array<any>): boolean {
  onlyArray(v);
  if (v === undefined || v === null || v.length === 0) {
    return true;
  }
  return false;
}

export function isPresentArray(v: Array<any> ): boolean {
  onlyArray(v);
  if (v !== undefined && v !== null && v.length > 0) {
    return true;
  }
  return false;
}


/**
 * is variable Object
 */
export function isObject(v: object): boolean {
  if ((v instanceof Object || typeof v === 'object') && !(v instanceof Array)){
    return true;
  }
  return false;
}

export function onlyObject(v: object): boolean {
  if (typeof v === 'undefined'){
    throw new UndefinedTypeException();
  }
  if (!isObject(v)){
    throw new MismatchTypeException('only object type allowed but found other type');
  }
  return true;
}

export function onlyPresentObject(v: object): boolean {
  onlyObject(v);
  if(isPresentObject(v)){
    return true;
  }
  return false;
}

/**
 * not undefined not null and not empty
 * @param v example {}
 * @return example true
 */
export function isEmptyObject(v: {} | object | Object): boolean {
  onlyObject(v);
  if (v === undefined || v === null || Object.keys(v).length === 0) {
    return true;
  }
  return false;
}

export function isPresentObject(v: object): boolean {
  onlyObject(v);
  if (v !== undefined && v !== null && Object.keys(v).length > 0) {
    return false;
  }
  return true;
}


/**
 * not undefined not null and not empty
 * @param v example ''
 * @return example true
 */
export function isEmptyString(v: string ): boolean {
  onlyString(v);
  if(v === undefined || v === null || v.trim()=== ''){
    return true;
  }
  return false;
}
export function isPresentString(v: string ): boolean {
  onlyString(v);
  if(v !== undefined && v !== null && v.trim()=== ''){
    return true;
  }
  return false;
}
export function isString(value) {
  return typeof value === 'string';
}
export function onlyString(v) {
  if (typeof v === 'undefined'){
    throw new UndefinedTypeException();
  }
  if (!isString(v)){
    throw new MismatchTypeException('onlying string type but found other type');
  }
}

/**
 * Not undefined Not null  Number
 * @param v example null
 * @return example true
 */
export function isEmptyNumber(v:  number ): boolean {
  onlyNumber(v);
  if(v === undefined || v === null){
    return true;
  }
  return false;
}

export function isPresentNumber(v:  number ): boolean {
  onlyNumber(v);
  if(v !== undefined && v !== null){
    return true;
  }
  return false;
}
export function onlyNumber(v): void {
  if (typeof v === 'undefined'){
    throw new UndefinedTypeException();
  }
  if (!isNumber(v)){
    throw new MismatchTypeException('onlying number type but found other type');
  }
}
export function isNumber(v: number): boolean{
  return (v !== undefined) && (v !== null) && !isNaN(v);
}

/**
 * Not undefined Not null  Number
 * @param v example null
 * @return example true
 */
export function isEmptyBoolean(v: boolean): boolean {
  onlyBoolean(v)
  if(v === undefined || v === null){
    return true;
  }
  return false;
}

export function isPresentBoolean(v: boolean): boolean {
  onlyBoolean(v)
  if(v !== undefined && v !== null){
    return true;
  }
  return false;
}

export function onlyBoolean(v) {
  if (!isBoolean(v)){
    throw new MismatchTypeException('onlying boolean type but found other type');
  }
}

export function isBoolean(v) {
  return typeof v === 'boolean';
}

export function isInteger(v) {
  return typeof v === 'number' && isFinite(v) && Math.floor(v) === v;
}

export function isPresent(v): boolean {
  return v !== undefined && v !== null;
}

export function printTypeOf(v: any): void {
  console.log(typeof v);
}

export function test1(o: { [key: string]: any }): boolean {
  console.log(o);
  return true;
}

export function test2(a): number {
  return a;
}





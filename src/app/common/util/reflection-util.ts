import {isObject} from "./type-check-util";
import {throwRunTimeError} from "./misc-util";

/**
 * iterate over object keys
 * @param obj example {id:1,name:'shaiful'}
 */
export function objIteration(obj: object): void {
  console.log('objIteration');
  console.log(Object.entries(obj));
  for (let [key, value] of Object.entries(obj)) {
    console.log(key + ':' + value);
  }
  console.log(Object.keys(obj));
  Object.keys(obj).forEach( (key,index) => {
    console.dir( key);
  });

  console.log(Object.values(obj));
  Object.values(obj).forEach((value, index)  => {
    console.log(value);
  });
}


/**
 * Get properties of an object in list
 */
export function getPropListOfObj<T extends object>(obj: T): Array<string> {
  if(!isObject(obj)){
    throwRunTimeError()
  }
  for (const [p, v] of Object.entries(obj)) {
    console.log(p , v);
  }
  return Object.keys(Object.entries(obj));
}

/**
 * find value by property from object
 * @param obj  : {id:1,name:'shaiful'}
 * @param prop example 'id'
 * @return example 1
 */
export function getValByProp(obj: object, prop: string): any {
  for (const [key, value] of Object.entries(obj)) {
    if (key === prop) {
      return value;
    }
  }
  return null;
}

/**
 * check if object have desired property and value
 * @param list  : {id:1,name:'shaiful'}
 * @param prop example 'id'
 * @param value example 1
 * @return example true
 */
export function hasPropAndVal<T extends object>(obj: T, prop: string, value: any): boolean {
  for (const [p, v] of Object.entries(obj)) {
    if (p === prop && v === value) {
      return true;
    }
  }
  return false;
}


/**
 * pass an object and some properties. It will return an object
 */
export function pickTest<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  let result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

/**
 * pass an object and some properties. It will return an object
 */
export function partialTest<T, K extends keyof T>(obj: T, keys: K[]): Partial<T> {
  let result = {} as Partial<T>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result;
}



export class Box {
  public x: number;
  public y: number;
  public height: number;
  public width: number;
  constructor(obj?: any) {
    this.x = obj?.x
    this.y = obj?.y
    this.height = obj?.height
    this.width = obj?.width;
  }
}


export function reflectionTest1(): string {
  const box: Box = new Box({x:1,height:5});
  const box2: Box = new Box();

  console.log(getPropListOfObj(box))
  console.log(getPropListOfObj(box2))
  console.log(box.height)
  return '2';
}


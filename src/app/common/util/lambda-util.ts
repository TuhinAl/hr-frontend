
/**
 * lambda function
 */
export function getObjById(id: number|string): any {
  return itemType => itemType.id === id;
}
//  return [{id:"1",name:"name 1"},{id:"2",name:"name 2"}].find(getObjById(2)),


/**
 * lambda function
 */
export function getObjBy(prop:string, value: number|string): any {
  return itemType => itemType[prop] === value;
}

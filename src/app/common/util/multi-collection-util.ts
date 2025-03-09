import {classType} from '../type/class.type';
import {classToEmptyObj} from './object-util';
import {uniqueObjList} from './single-collection-util';
import {getPropListOfObj} from "./reflection-util";

/**
 * join two list
 */
export function joinTwoList(list1, list2): any {
  return [...list1, ...list2];
}

/**
 * compare two list and return common elements. present both in list1 and list2
 * @param list1 example: [{id:1,name:'name 1'},{id:2,name:'name 2'},{id:3,name:'name 3'}]
 * @param prop1 example: 'id'
 * @param list2 example: [{id:1,name:'name 1'},{id:3,name:'name 3'}]
 * @param prop2 example: 'id'
 * @return resultList example: [{id:1,name:'name 1'},{id:3,name:'name 3'}]
 */
export function commonObjFromTwoList<T extends object>(
  list1:Array<T>, prop1:string, list2:Array<object>, prop2:string): Array<T> {
  const resultList:Array<T> = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i][prop1] === list2[j][prop2]) {
        resultList.push(list1[i]);
      }
    }
  }
  return resultList;
}


/**
 * compare two list and return uncommon elements. present only in any one list
 * @param list1 example [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}]
 * @param prop1 example: 'id'
 * @param list2 example [ {id: 3, name: 'name 3'}, {id: 4, name: 'name 4'}]
 * @param prop2 example: 'id'
 * @return resultList example : [{id: 1, name: 'name 1'}, {id: 4, name: 'name 4'}]
 */
export function unCommonObjFromTwoList(list1, prop1, list2, prop2): any[] {
  return [];
}


/**
 * compare two list and return unique elements. take an object only once.
 * @param list1 example [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}]
 * @param prop1 example: 'id'
 * @param list2 example [{id: 3, name: 'name 3'}, {id: 4, name: 'name 4'}]
 * @param prop2 example: 'id'
 * @return resultList example : [{id: 1, name: 'name 2'}, {id: 2, name: 'name 3'}, {id: 3, name: 'name 3'}, {id: 4, name: 'name 4'}]
 */
export function uniqueObjFromTwoList(list1, prop1, list2, prop2): any[] {
  return [];
}


/**
 * return non unique elements of a List
 * @param list1 example [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'},{id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}]
 * @param prop1   'id'
 * @param list2 example [{id: 2, name: 'name 2'}, {id: 3, name: 'name 3'}, {id: 4, name: 'name 4'}]
 * @param prop2 'id'
 * @return List example : [{id:2,name:'name 2'},{id:3,name:'name 3'}]
 */
export function nonUniqueObjFromTwoList(list1, prop1, list2, prop2): any {
  const resultList = [];
  for (let i = 0; i < resultList.length; i++) {

  }
  return resultList;
}


/**
 * Left join two list
 * @param list1 example [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 1, name: 'name 1'}]
 * @param prototypeProp example address
 * @param propList1 example id
 * @param list2 example [{id: 1, city: 'tangail', student_id: 1}, {id: 2, name: 'name 2'}, {id: 1, name: 'name 1'}]
 * @param propList2 example student_id
 * @return List example :
 */
export function oneToMany<T extends object, U extends object>(
  list1:Array<T>,
  prop1: string,
  prototypeProp: string,
  list2:Array<U>,
  prop2: string): Array<T> {

  return list1.map(obj => ({ ...obj, [prototypeProp]: list2.filter(obj2 => obj[prop1] === obj2[prop2]) }));
}



/**
 * list to group by
 * @param list example [{id: 1, name: 'name 1'}, {id: 2, name: 'name 2'}, {id: 1, name: 'name 1'}]
 * @param property example 'id'
 * @return List example :
 */
export function groupByProp<T extends object>(
  propForCompare: string,
  projection:Array<object>,
  clazz1:  classType,
  projectionAndClazz1PropMap:  Array<{ [key: string]: string }>,
  clazz1PropForOneToMany: string,
  clazz2:  classType,
  projectionAndClazz2PropMap:  Array<{ [key: string]: string }>
): Array<T> {

  const keyList:Array<string> = getPropListOfObj(clazz1);

  const uniqueList:Array<object> = uniqueObjList(projection,propForCompare);
  //const o1:T = classToObj<T>(clazz1, uniqueList[0])
  //const o2:object = classToObj(clazz2, uniqueList[0])

  for (let i = 0 ; i < uniqueList.length; i++){
  }
  //const uniqueList2:Array<typeof clazz1> = uniqueList.map(e => new clazz1({'id':'1', 'name':'name 1' }))
  /*for (let i = 0; i < uniqueList.length; i++) {
    uniqueList[i]
  }*/

  return [classToEmptyObj<T>(clazz1)];
}


export function groupByProp2(list:Array<object>, prop: string): any {
  return list.reduce( (acc, obj) => ({
      ...acc, [obj[prop]]: [...(acc[obj[prop]] || []), obj],
    }),  {}
  );
}

export function groupByProp3(list:Array<object>, prop: string): any {
  return list.reduce( (acc, obj) => {
    if (!acc[obj[prop]]) {
      acc[obj[prop]] = [];
    }
    acc[obj[prop]].push(obj);
    return acc;
  }, {});
}

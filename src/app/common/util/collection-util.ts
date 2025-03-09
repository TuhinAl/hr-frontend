export function map(key:string, value:string)  : Map<string, string> {
  return new Map<string,string>();
}

export function record(obj: object)  : Record<string, string> {
  const r : Record<string, string> = {
    1: '',
    2: ''
  }
  return r;
}

export function tupleExample(obj: object)  : [number, string] {
  const employee: [number, string] = [1, "Steve"];
  const person: [number, string, boolean] = [1, "Steve", true];
  let user: [number, string, boolean, number, string];// declare tuple variable
  user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
  return employee;
}

export function tupleArrayExample(obj: object)  : void {
  var employeeList: Array<[number, string]>;
  employeeList = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
  console.log()
  var employee: [number, string] = [1, "Steve"];
  employee[0]; // returns 1
  employee[1]; // returns "Steve"
  employee.push(5, "james");
}

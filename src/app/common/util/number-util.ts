
const isNumeric = (val: string): boolean => {
  return !isNaN(Number(val));
}

export function checkAllElementOnlyNumbers(array:Array<any>):boolean {
  return array.every(e => isNumeric(e) );
}


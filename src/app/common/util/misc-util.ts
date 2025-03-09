import {Router} from "@angular/router";

export function random(length: number): string {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function getCurrentTime(): string {
  const currentTime: number = +new Date();
  return currentTime.toString();
}

export function removeZeroPadding(str: string): string {
  return str.replace(/^0+/, '');
}

export function throwRunTimeError(message: string = "Runtime error"): never {
  throw new Error(message);
}

export function randomNumber(): number {
  return (new Date().getTime() + Math.floor(100000000 + Math.random() * 900000000));
}

export function sleep(sleepForMilliSec: number = 0): boolean {  //10
  const startTimeInMs: number = Date.now();  // 10000
  while (sleepForMilliSec <= Date.now() - startTimeInMs) {  // 10000
    break;
  }
  return true;
}


const number0 = '০'
const number1 = '১'
const number2 = '২'
const number3 = '৩'
const number4 = '৪'
const number5 = '৫'
const number6 = '৬'
const number7 = '৭'
const number8 = '৮'
const number9 = '৯'

export function isBanglaNumber(input: string) {
  let flag = false;
  for (var i = 0; i < input.length; ++i) {
    if (number0 === input[i] || number1 === input[i] || number2 === input[i] || number3 === input[i]
      || number4 === input[i] || number5 === input[i] || number6 === input[i] || number7 === input[i]
      || number8 === input[i] || number9 === input[i]) {
      flag = true;
    } else {
      return false;
    }
  }
  return flag;
}

export function checkAllElementOnlyBanglaNumbers(array: Array<any>): boolean {
  return array.every(e => isBanglaNumber(e));
}

export function replaceBanglaDigitToEnglish(str: string): string {
  return str
    .replace(/০/gi, '0')
    .replace(/১/gi, '1')
    .replace(/২/gi, '2')
    .replace(/৩/gi, '3')
    .replace(/৪/gi, '4')
    .replace(/৫/gi, '5')
    .replace(/৬/gi, '6')
    .replace(/৭/gi, '7')
    .replace(/৮/gi, '8')
    .replace(/৯/gi, '9')
}

export function removeSpaceFromString(str: string): string {
  return str.replace(/ /gi, '')
}

export function isCalculable(str: string): boolean {
  return (/^([0-9./]{1,7})$/g).test(str)
}

export function numberToFixFloatNumber(n: number, f: number = 2): number {
  return Number(n.toFixed(f));
}

export function banglaToEnglishNumber(input: string): number {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (number0 === input[i]) {
      output = output + 0
    } else if (number1 === input[i]) {
      output = output + 1
    } else if (number2 === input[i]) {
      output = output + 2
    } else if (number3 === input[i]) {
      output = output + 3
    } else if (number4 === input[i]) {
      output = output + 4
    } else if (number5 === input[i]) {
      output = output + 5
    } else if (number6 === input[i]) {
      output = output + 6
    } else if (number7 === input[i]) {
      output = output + 7
    } else if (number8 === input[i]) {
      output = output + 8
    } else if (number9 === input[i]) {
      output = output + 9
    } else if ('.' === input[i]) {
      output = output + '.'
    } else {
      throw new Error();
    }
  }
  return +output;
}

// 45  ৪৫
export function englishNumberToBanglaString(eng: number): string {
  const engString = eng.toString()
  let output = '';
  for (let i = 0; i < engString.length; i++) {
    if ('0' === engString[i]) {
      output = output + number0
    } else if ('1' === engString[i]) {
      output = output + number1
    } else if ('2' === engString[i]) {
      output = output + number2
    } else if ('3' === engString[i]) {
      output = output + number3
    } else if ('4' === engString[i]) {
      output = output + number4
    } else if ('5' === engString[i]) {
      output = output + number5
    } else if ('6' === engString[i]) {
      output = output + number6
    } else if ('7' === engString[i]) {
      output = output + number7
    } else if ('8' === engString[i]) {
      output = output + number8
    } else if ('9' === engString[i]) {
      output = output + number9
    } else if ('.' === engString[i]) {
      output = output + '.'
    } else {
      throw new Error();
    }
  }
  return output;
}

export function currentUrl(router: Router): string {
  let urlTree = router.parseUrl(router.url);
  urlTree.queryParams = {};
  return urlTree.toString();
}

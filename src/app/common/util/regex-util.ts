/**
 * match email regex
 *   {3,100}           Assert string is between 3 and 100 characters
 *   (?=.*[0-9])      Assert a string has at least one number
 */
export function matchEmail(email: string): boolean{
  return !!email.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,100}$/);
}

/**
 * match number regex
 *   [0-9]    any number
 */
export function isNumber(str: string): boolean{
  return !!str.match(/[0-9]$/);
}

/**
 * match only decimal number regex
 *   ^\d*\.?\d{0,2}      decimal number
 */
export function isDecimalNumber(str: string): boolean{
  return !!str.match(/^\d*\.?\d{0,2}$/);
}

/**
 * match only alphabet regex
 *  [a-zA-Z]   only alphabet
 */
export function isOnlyAlphabet(str: string): boolean{
  return !!str.match(/[a-zA-Z]$/);
}

/**
 * match alphabet and number regex
 *  [a-zA-Z0-9]*    both number and string present
 */
export function isAlphaNumeric(str: string): boolean{
  return !!str.match(/^[a-zA-Z0-9]*$/);
}

export function regExMatch(str: string, regExp :RegExp): boolean {
  return regExp.test(str);
}

export function isDateV1(str: string): boolean {
  const re : RegExp = new RegExp('^(\\d{2})\\/(\\d{2})\\/(\\d{4})$');
  return re.test(str);
}

//   23/11/2021
export function isDateV2(str: string): boolean {
  const re : RegExp = new RegExp('^(\\d{2})\\/(\\d{2})\\/(\\d{4})$');
  return re.test(str);
}


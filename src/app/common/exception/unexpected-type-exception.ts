
export class UnExpectedTypeException extends Error {

  type: string = 'UnExpectedTypeException'

  constructor(message: string = 'unexpected type exception') {
    super(message);
  }
}

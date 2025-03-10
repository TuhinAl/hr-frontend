
export class MismatchTypeException extends Error {

  constructor(message: string = 'mismatch type exception') {
    super(message);
    Object.setPrototypeOf(this, MismatchTypeException.prototype);
  }

  getErrorMessage() {
    return "Error: " + this.message;
  }
}

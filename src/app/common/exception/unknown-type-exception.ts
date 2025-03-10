
export class UnknownTypeException extends Error {

  constructor(message: string = 'unknown type exception') {
    super(message);
    Object.setPrototypeOf(this, UnknownTypeException.prototype);
  }

  getErrorMessage() {
    return "Error: " + this.message;
  }
}

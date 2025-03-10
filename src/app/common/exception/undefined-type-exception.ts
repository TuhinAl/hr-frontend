
export class UndefinedTypeException extends Error {

  constructor(message: string = 'undefined type exception') {
    super(message);
    Object.setPrototypeOf(this, UndefinedTypeException.prototype);
  }

  getErrorMessage() {
    return "Error: " + this.message;
  }
}

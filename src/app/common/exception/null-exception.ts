
export class NullException extends Error {

  constructor(message: string = 'null exception') {
    super(message);
    Object.setPrototypeOf(this, NullException.prototype);
  }

  getErrorMessage() {
    return "Error: " + this.message;
  }
}

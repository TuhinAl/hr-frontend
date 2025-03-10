
export class EmptyException extends Error {

  constructor(message: string = 'empty exception') {
    super(message);
    Object.setPrototypeOf(this, EmptyException.prototype);
  }

  getErrorMessage() {
    return "Error: " + this.message;
  }
}

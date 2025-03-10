
export class UndefinedException extends Error {

  constructor(message: string = 'undefined exception') {
    super(message);
    Object.setPrototypeOf(this, UndefinedException.prototype);
  }

  getErrorMessage() {
    return "Error: " + this.message;
  }
}

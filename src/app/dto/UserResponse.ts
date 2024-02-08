import {prop} from "@rxweb/reactive-form-validators";

export class UserResponse {

  @prop() username: string | null = null;
  @prop() token: string | null = null;
  @prop() message: string | null = null;

  constructor(o?: Partial<UserResponse>) {
    Object.assign(this, o);
  }
}

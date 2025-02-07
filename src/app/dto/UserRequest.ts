import {prop} from "@rxweb/reactive-form-validators";

export class UserRequest {

  @prop() username: string | null = null;
  @prop() password: string | null = null;

  constructor(o?: Partial<UserRequest>) {
    Object.assign(this, o);
  }
}

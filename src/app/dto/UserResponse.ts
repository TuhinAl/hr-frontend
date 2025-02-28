import {prop} from "@rxweb/reactive-form-validators";

export class UserResponse {

  @prop() username: string | null = null;
  @prop() token: string | null = null;
  @prop() message: string | null = null;
  @prop() id: string | null = null;
  @prop() email: string | null = null;
  @prop() isEnabled: boolean | null = null;
  @prop() isPunchEnabled: boolean | null = null;

  constructor(o?: Partial<UserResponse>) {
    Object.assign(this, o);
  }
}

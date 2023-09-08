import {prop} from "@rxweb/reactive-form-validators";

export class EmployeeAccountInfoDto {

  @prop() id: string | null = null;
  @prop() username: string | null = null;
  @prop() password: string | null = null;

  constructor(o?: Partial<EmployeeAccountInfoDto>) {
    Object.assign(this, o);
  }
}

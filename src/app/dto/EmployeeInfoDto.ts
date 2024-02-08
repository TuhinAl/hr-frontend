import {prop} from "@rxweb/reactive-form-validators";

export class EmployeeInfoDto {

  @prop() firstName: string | null = null;
  @prop() lastName: string | null = null;
  @prop() email: string | null = null;
  @prop() username: string | null = null;
  @prop() password: string | null = null;

  constructor(o?: Partial<EmployeeInfoDto>) {
    Object.assign(this, o);
  }
}

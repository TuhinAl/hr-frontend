import {prop} from "@rxweb/reactive-form-validators";

export class EmployeeInfoDto {

  @prop() id: string | null = null;
  @prop() employeeId: string | null = null;
  @prop() employeeNcId: string | null = null;
  @prop() firstName: string | null = null;
  @prop() lastName: string | null = null;
  @prop() email: string | null = null;
  @prop() username: string | null = null;
  @prop() mobile: string | null = null;
  @prop() password: string | null = null;
  @prop() confirmPassword: string | null = null;
  @prop() address: string | null = null;
  @prop() designationTypeEnumKey: string | null = null;
  @prop() designationTypeEnumValue: string | null = null;

  constructor(o?: Partial<EmployeeInfoDto>) {
    Object.assign(this, o);
  }
}

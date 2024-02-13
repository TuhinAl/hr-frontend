import {prop} from "@rxweb/reactive-form-validators";

export class EmployeeInfoSearchDto {

  @prop() id: string | null = null;
  @prop() page: number | null = null;
  @prop() size: number | null = null;

  constructor(o?: Partial<EmployeeInfoSearchDto>) {
    Object.assign(this, o);
  }
}

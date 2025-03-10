import {prop} from "@rxweb/reactive-form-validators";
import { FormStatusWithPage } from "../common/model/FormStatusWithPage";

export class EmployeeInfoSearchDto extends FormStatusWithPage {

  @prop() id: string | null = null;

  constructor(object?: Partial<EmployeeInfoSearchDto>) {
    super();
    Object.assign(this, object);
  }
}

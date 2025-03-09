import {prop} from "@rxweb/reactive-form-validators";


export class FormStatusWithPage {

  serialVersionUID: number = (new Date().getTime() + Math.floor(100000000 + Math.random() * 900000000));

  @prop() loadingMode: boolean = false;
  @prop() updateMode: boolean = false;

  @prop() page: number;
  @prop() size: number = 10;

  @prop() multiSearchProp: string; //search on multiple property
  @prop() displayProp: string; //display multiple property together

  public constructor(o?: Partial<FormStatusWithPage>) {
    Object.assign(this, o);
  }

}

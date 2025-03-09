import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {FormGroup} from "@angular/forms";


export function makeObjFromClass(modelType: {[key: string]: any}):object{
  const rxFormBuilder:RxFormBuilder = new RxFormBuilder();
  const fg: FormGroup =rxFormBuilder.formGroup(modelType);
  return fg.value;
}

import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RxFormBuilder, RxReactiveFormsModule} from '@rxweb/reactive-form-validators';


@Injectable({providedIn: RxReactiveFormsModule  })
export class FormService {

  //constructor( @Optional() private rxFormBuilder:RxFormBuilder ) {}
  //constructor(@Inject(RxFormBuilder)private rxFormBuilder:RxFormBuilder ) {}
  constructor( private rxFormBuilder:RxFormBuilder) {}

  makeBlankForm<T>(modelType: T | {[key: string]: any;}) : FormGroup{
    // @ts-ignore
    return this.rxFormBuilder.formGroup(modelType);
  }

  makeFormWithData<T>(model: T | {[key: string]: any;}, data:any) : FormGroup{
    // @ts-ignore
    return this.rxFormBuilder.formGroup(model,data);
  }

}

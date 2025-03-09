import {CommonModule} from '@angular/common';
import {DateMaskDirective} from './date-mask-directive';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [DateMaskDirective],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [DateMaskDirective],
})
export class DateMaskDirectiveModule {
  constructor(){ }
}

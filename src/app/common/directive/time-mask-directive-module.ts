import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TimeMaskDirective} from "./time-mask-directive";


@NgModule({
  declarations: [TimeMaskDirective],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [TimeMaskDirective],
})
export class TimeMaskDirectiveModule {
  constructor(){ }
}

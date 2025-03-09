import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalMaskDirective} from './capital-mask-directive';


@NgModule({
  declarations: [CapitalMaskDirective],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [CapitalMaskDirective],
})
export class CapitalMaskDirectiveModule {
  constructor(){ }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {MultiSelectFavAutoSearchComp} from "./MultiSelectFavAutoSearchComp";

@NgModule({
  declarations: [MultiSelectFavAutoSearchComp],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  exports: [MultiSelectFavAutoSearchComp],
})
export class MultiSelectFavAutoSearchModule {
  constructor(){ }
}

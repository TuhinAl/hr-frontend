import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {SingleSelectFavAutoSearchComp} from "./SingleSelectFavAutoSearchComp";

@NgModule({
  declarations: [SingleSelectFavAutoSearchComp],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  exports: [SingleSelectFavAutoSearchComp],
})
export class SingleSelectFavAutoSearchModule {
  constructor(){ }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {AutoSearchFavInvestigationComp} from './AutoSearchFavInvestigationComp';

@NgModule({
  declarations: [AutoSearchFavInvestigationComp],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  exports: [AutoSearchFavInvestigationComp],
})
export class AutoSearchFavInvestigationModule {
  constructor(){ }
}

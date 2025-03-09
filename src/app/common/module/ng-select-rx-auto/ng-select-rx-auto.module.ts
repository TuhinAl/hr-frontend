import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectRxAutoComponent} from './ng-select-rx-auto.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [NgSelectRxAutoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  exports: [NgSelectRxAutoComponent],
})
export class NgSelectRxAutoModule {
  constructor(){ }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectRxComponent} from './ng-select-rx.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [NgSelectRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  exports: [NgSelectRxComponent],
})
export class NgSelectRxdModule {
  constructor(){ }
}

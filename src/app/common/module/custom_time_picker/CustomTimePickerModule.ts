import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomTimePickerComp} from "./CustomTimePickerComp";
import {CustomTimePickerCompService} from "./CustomTimePickerCompService";

@NgModule({
  declarations: [
    CustomTimePickerComp
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [CustomTimePickerComp],
  providers: [CustomTimePickerCompService]
})
export class CustomTimePickerModule {
}

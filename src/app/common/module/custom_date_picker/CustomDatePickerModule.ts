import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomDatePickerCompService} from "./CustomDatePickerCompService";
import {CustomDatePickerComp} from "./CustomDatePickerComp";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {DateMaskDirectiveModule} from "../../directive/date-mask-directive-module";

@NgModule({
  declarations: [
    CustomDatePickerComp
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    // DataGridModule,
    MatFormFieldModule,
    DateMaskDirectiveModule,
  ],
  exports: [CustomDatePickerComp],
  providers: [CustomDatePickerCompService]
})
export class CustomDatePickerModule {
}

import {NgModule} from "@angular/core";
import {CustomDatePipe} from "./CustomDatePipe";

@NgModule({
  imports: [],
  declarations: [
    CustomDatePipe
  ],
  exports: [
    CustomDatePipe
  ]
})
export class CustomDatePipeModule {
}

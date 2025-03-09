import {NgModule} from '@angular/core';
import {TimeFormatPipe} from "./TimeFormatPipe";

@NgModule({
  declarations: [TimeFormatPipe],
  exports: [TimeFormatPipe],
  providers: []
})
export class TimeFormatPipeModule {}

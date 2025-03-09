import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorMessageComponent} from './error-message.component';
import {ErrorMessageService} from './error-message.service';

@NgModule({
  declarations: [
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ErrorMessageService
  ],
  exports: [
    ErrorMessageComponent,
  ],
})
export class ErrorMessageModule {
  constructor() {
  }
}

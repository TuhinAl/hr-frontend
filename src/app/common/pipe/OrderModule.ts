import { NgModule } from '@angular/core';
import {OrderPipe} from "./OrderPipe";

@NgModule({
  declarations: [OrderPipe],
  exports: [OrderPipe],
  providers: [OrderPipe]
})
export class OrderModule {}

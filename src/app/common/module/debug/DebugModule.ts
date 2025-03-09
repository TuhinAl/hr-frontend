import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebugComp} from "./DebugComp";

@NgModule({
  declarations: [DebugComp],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [DebugComp],
})
export class DebugModule {
  constructor(){ }
}

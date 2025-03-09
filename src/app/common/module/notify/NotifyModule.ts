import {NgModule} from "@angular/core";
import {NotifyComp} from "./NotifyComp";
import {OverlayModule} from '@angular/cdk/overlay';
import {ToastService} from "./NotifyService";
import {CommonModule} from "@angular/common";

/*
export declare class NotifyModule {

  static forRoot(config?: Partial<NotifyConfig>): ModuleWithProviders<NotifyModule>;

  static ɵfac: i0.ɵɵFactoryDeclaration<NotifyModule, never>;

  static ɵmod: i0.ɵɵNgModuleDeclaration<NotifyModule,
    [typeof i1.NotifyComp],
    [typeof i2.CommonModule],
    [typeof i1.NotifyComp]>;

  static ɵinj: i0.ɵɵInjectorDeclaration<NotifyModule>;
}
*/

@NgModule({
  declarations: [NotifyComp],
  imports: [ OverlayModule, CommonModule],
  providers: [
    ToastService
  ],
  exports: [NotifyComp],
})
export class ToastModule {

  /*public static forRoot(): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [
        ToastService
      ],
    };
  }*/
}

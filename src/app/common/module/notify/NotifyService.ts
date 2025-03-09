import {Injectable, Injector, TemplateRef} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {NotifyComp} from "./NotifyComp";

export class NotifyRef {
  constructor(private readonly overlay: OverlayRef) {}
  close() {   this.overlay.dispose();   }
  isVisible() {   return this.overlay && this.overlay.overlayElement;   }
  getPosition() {    return this.overlay.overlayElement.getBoundingClientRect();   }
}

export class NotifyData {
  type: 'warning' | 'info' | 'success'| 'error' = "info";
  text?: string;
  template?: TemplateRef<any>;
}

@Injectable({   providedIn: 'root'  })
export class ToastService {

  private lastToast: NotifyRef;

  constructor( private overlay: Overlay, private parentInjector: Injector) { }

  show(notifyData: NotifyData) {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible ? this.lastToast.getPosition().bottom : 20;
    const top = position + 'px';
    const positionStrategy = this.overlay.position().global().top(top).right('20 px');
    const overlayRef = this.overlay.create({ positionStrategy });
    const toastRef = new NotifyRef(overlayRef);
    this.lastToast = toastRef;
    const tokens = new WeakMap();
    tokens.set(NotifyData, notifyData);
    tokens.set(NotifyRef, toastRef);
    const injector = new PortalInjector(this.parentInjector, tokens);
    const toastPortal = new ComponentPortal(NotifyComp, null, injector);
    overlayRef.attach(toastPortal);
    return toastRef;
  }

}

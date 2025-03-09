import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {animate, AnimationEvent, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';
import {   NotifyData, NotifyRef} from "./NotifyService";

export const toastAnimations: { readonly fadeToast: AnimationTriggerMetadata } = {
  fadeToast: trigger('fadeAnimation', [
    state('default', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate('{{ fadeIn }}ms')]),
    transition(
      'default => closing',
      animate('{{ fadeOut }}ms', style({ opacity: 0 })),
    ),
  ]),
};

//https://adrianfaciu.dev/posts/angular-toast-service/
@Component({
  selector: 'Notify',
  template: `
    <div class="toast"   *ngIf = "showFlag"
          >
      {{ iconType }}
      <div>{{ notifyData.text }}</div>
      <button (click)="close()">close</button>
    </div>
  `,
  styles: [`
    .toast {
      position: relative;
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      padding: 10px 15px 10px 48px;
      width: 290px;
      background: #fff;
      border-width: 1px;
      border-style: solid;
      border-color: #dddddd #d6d6d6 #cfcfcf;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
    }
  `],

})
export class NotifyComp implements OnInit, OnDestroy {

  // [@fadeAnimation]="{value: animationState, params: { fadeIn: showFlag, fadeOut: !showFlag }}" (@fadeAnimation.done)="onFadeFinished($event)"
  showFlag = true;
  animationState: 'default' | 'closing' = 'default';
  iconType: string;

  constructor( readonly notifyData: NotifyData, readonly notifyRef: NotifyRef) {
    this.iconType = notifyData.type === 'success' ? 'done' : notifyData.type;
  }

  ngOnInit() {
   setTimeout(() => {
      this.showFlag= false
      this.animationState = 'closing';
      this.notifyRef.close();
    }, 3000);
  }

  ngOnDestroy() {
    console.log("destroyed")
  }

  close() {
    this.notifyRef.close();
  }

  /*onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as string) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }*/
}

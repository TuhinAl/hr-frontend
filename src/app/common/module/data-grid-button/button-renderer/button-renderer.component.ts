import {Component, OnDestroy} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-button-renderer',
  template: ` <button type="button"  [ngClass]="cssClass" (click)="onClick($event)">{{label}}</button> `
})
export class ButtonRendererComponent implements ICellRendererAngularComp, OnDestroy {

  cssClass = 'btn btn-primary'
  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      }
      this.params.onClick(params);
    }
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}

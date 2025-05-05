import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataGridButtonComponent} from './data-grid-button.component';
import {AgGridModule} from 'ag-grid-angular';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import {ButtonRendererComponent} from './button-renderer/button-renderer.component';

@NgModule({
  declarations: [
    DataGridButtonComponent,
    ButtonRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  exports: [
    DataGridButtonComponent,
    ButtonRendererComponent,
  ],
})
export class DataGridButtonModule {
  constructor(){ }
}

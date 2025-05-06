import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule } from '@ionic/angular';
import { RxFormBuilder, RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInterceptor } from "./auth-service/employee.interceptor";
import { EmployeeCompApiService } from './common/api_uri/EmployeeCompApiService';
import { EmployeeApiService } from './common/service/EmployeeApiService';
import { FormService } from "./common/service/form-service";
import { DashboardComp } from "./dashboard/DashboardComp";
import { DashboardCompService } from "./dashboard/DashboardCompService";
import { EmployeeDashboardComp } from "./employee-dashboard/EmployeeDashboardComp";
import { EmployeeDashboardCompService } from "./employee-dashboard/EmployeeDashboardCompService";
import { EmployeeDetailsComp } from './employee-details/EmployeeDetailsComp';
import { EmployeeDetailsCompService } from './employee-details/EmployeeDetailsCompService';
import { EmployeeLeaveListComp } from './employee-leave-list/EmployeeLeaveListComp';
import { EmployeeLeaveListCompService } from './employee-leave-list/EmployeeLeaveListCompService';
import { EmployeeLeaveComp } from './employee-leave/EmployeeLeaveComp';
import { EmployeeLeaveCompService } from './employee-leave/EmployeeLeaveCompService';
import { EmployeeListComp } from './employee-list/EmployeeListComp';
import { EmployeeListCompService } from './employee-list/EmployeeListCompService';
import { MainLayoutComp } from './layout/main-layout/MainLayoutComp';
import { MainLayoutCompService } from './layout/main-layout/MainLayoutCompService';
import { EmployeeLoginComp } from "./login/EmployeeLoginComp";
import { EmployeeLoginCompService } from "./login/EmployeeLoginCompService";
import { EmployeeRegistrationComp } from "./registration/EmployeeRegistrationComp";
import { EmployeeRegistrationCompService } from "./registration/EmployeeRegistrationCompService";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComp,
    EmployeeLoginComp,
    DashboardComp,
    EmployeeDashboardComp,
    EmployeeDetailsComp,
    EmployeeListComp,
    MainLayoutComp,
    EmployeeLeaveComp,
    EmployeeLeaveListComp

  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    IonicModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AgGridModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmployeeInterceptor,
      multi: true
      /* The multi: true option ensures that the interceptor is appended to the existing array of interceptors rather than replacing them. */
    },
    EmployeeRegistrationCompService,
    ToastrService,
    FormService,
    RxFormBuilder,
    EmployeeLoginCompService,
    DashboardCompService,
    EmployeeDashboardCompService,
    EmployeeDetailsCompService,
    EmployeeListCompService,
    EmployeeCompApiService,
    EmployeeApiService,
    MainLayoutCompService,
    EmployeeLeaveCompService,
    EmployeeLeaveListCompService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

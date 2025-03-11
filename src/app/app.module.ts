import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RxFormBuilder, RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeInterceptor } from "./auth-service/employee.interceptor";
import { FormService } from "./common/service/form-service";
import { DashboardComp } from "./dashboard/DashboardComp";
import { DashboardCompService } from "./dashboard/DashboardCompService";
import { EmployeeDashboardComp } from "./employee-dashboard/EmployeeDashboardComp";
import { EmployeeDashboardCompService } from "./employee-dashboard/EmployeeDashboardCompService";
import { EmployeeLoginComp } from "./login/EmployeeLoginComp";
import { EmployeeLoginCompService } from "./login/EmployeeLoginCompService";
import { EmployeeRegistrationComp } from "./registration/EmployeeRegistrationComp";
import { EmployeeRegistrationCompService } from "./registration/EmployeeRegistrationCompService";
import { IonicModule } from '@ionic/angular';
import { EmployeeDetailsComp } from './employee-details/EmployeeDetailsComp';
import { EmployeeDetailsCompService } from './employee-details/EmployeeDetailsCompService';
import { EmployeeListComp } from './employee-list/EmployeeListComp';
import { EmployeeListCompService } from './employee-list/EmployeeListCompService';
import { EmployeeCompApiService } from './common/api_uri/EmployeeCompApiService';
import { EmployeeApiService } from './common/service/EmployeeApiService';
import { MainLayoutComp } from './layout/main-layout/MainLayoutComp';
import { MainLayoutCompService } from './layout/main-layout/MainLayoutCompService';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComp,
    EmployeeLoginComp,
    DashboardComp,
    EmployeeDashboardComp,
    EmployeeDetailsComp,
    EmployeeListComp,
    MainLayoutComp

  ],
  imports: [
    ToastrModule.forRoot({
      positionClass: 'toast-top-right'
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    IonicModule.forRoot()
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
    MainLayoutCompService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

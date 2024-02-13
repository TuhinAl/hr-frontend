import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeRegistrationComp} from "./registration/EmployeeRegistrationComp";
import {EmployeeRegistrationCompService} from "./registration/EmployeeRegistrationCompService";
import {EmployeeLoginComp} from "./login/EmployeeLoginComp";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormService} from "./common/service/form-service";
import {RxFormBuilder, RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeLoginCompService} from "./login/EmployeeLoginCompService";
import {EmployeeApiService} from "./common/service/EmployeeApiService";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {DashboardComp} from "./dashboard/DashboardComp";
import {DashboardCompService} from "./dashboard/DashboardCompService";
import {EmployeeDashboardComp} from "./employee-dashboard/EmployeeDashboardComp";
import {EmployeeDashboardCompService} from "./employee-dashboard/EmployeeDashboardCompService";
import {EmployeeInterceptor} from "./auth-service/employee.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComp,
    EmployeeLoginComp,
    DashboardComp,
    EmployeeDashboardComp

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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EmployeeInterceptor,
      multi: true
    },
    EmployeeRegistrationCompService,
    ToastrService,
    FormService,
    RxFormBuilder,
    EmployeeLoginCompService,
    EmployeeApiService,
    DashboardCompService,
    EmployeeDashboardCompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

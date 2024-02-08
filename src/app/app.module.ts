import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeRegistrationComp} from "./registration/EmployeeRegistrationComp";
import {EmployeeRegistrationCompService} from "./registration/EmployeeRegistrationCompService";
import {EmployeeLoginComp} from "./login/EmployeeLoginComp";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormService} from "./common/service/form-service";
import {RxFormBuilder, RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeLoginCompService} from "./login/EmployeeLoginCompService";
import {EmployeeApiService} from "./common/service/EmployeeApiService";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {DashboardComp} from "./dashboard/DashboardComp";
import {DashboardCompService} from "./dashboard/DashboardCompService";
@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComp,
    EmployeeLoginComp,
    DashboardComp

  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  providers: [EmployeeRegistrationCompService,
    ToastrService,
    FormService,
    RxFormBuilder,
    EmployeeLoginCompService,
    EmployeeApiService,
    DashboardCompService],
  bootstrap: [AppComponent]
})
export class AppModule { }

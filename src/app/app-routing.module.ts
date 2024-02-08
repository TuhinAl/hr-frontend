import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeLoginComp} from "./login/EmployeeLoginComp";
import {EmployeeRegistrationComp} from "./registration/EmployeeRegistrationComp";
import {DashboardComp} from "./dashboard/DashboardComp";

const routes: Routes = [ {
  path: '',
  redirectTo:'',
  pathMatch:'full'
},
  {
    path: '',
    component: DashboardComp
  },
  {
    path: 'login',
    component: EmployeeLoginComp
  },
  {
    path: 'registration',
    component: EmployeeRegistrationComp
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeLoginComp} from "./login/EmployeeLoginComp";
import {EmployeeRegistrationComp} from "./registration/EmployeeRegistrationComp";
import {DashboardComp} from "./dashboard/DashboardComp";
import {EmployeeDashboardComp} from "./employee-dashboard/EmployeeDashboardComp";
import { EmployeeListComp } from './employee-list/EmployeeListComp';
import { MainLayoutComp } from './layout/main-layout/MainLayoutComp';
import { EmployeeDetailsComp } from './employee-details/EmployeeDetailsComp';
import { EmployeeLeaveComp } from './employee-leave/EmployeeLeaveComp';

const routes: Routes = [ {
  path: '',
  redirectTo:'',
  pathMatch:'full'
},
  {
    path: '',
    // component: DashboardComp
    component: MainLayoutComp,
    children: [
      { path: '', redirectTo: 'employee-dashboard', pathMatch: 'full' },
      { path: 'employee-dashboard', component: EmployeeDashboardComp },
      { path: 'employee-list', component: EmployeeListComp },
      // Add other routes here
    ]
  },
  {
    path: 'login',
    component: EmployeeLoginComp
  },
  {
    path: 'registration',
    component: EmployeeRegistrationComp
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComp
  },
  {
    path: 'employee-leave',
    component: EmployeeLeaveComp
  },
  /* {
    path: 'employee-list',
    component: EmployeeListComp
  }, */
  /* {
    path: 'employee-dashboard',
    component: EmployeeDashboardComp,
    children:[{
      path: 'employee-dashboard',
      component: EmployeeDashboardComp
    }]
  }, */

  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

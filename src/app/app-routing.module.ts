import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeLoginComp} from "./login/EmployeeLoginComp";
import {EmployeeRegistrationComp} from "./registration/EmployeeRegistrationComp";
import {DashboardComp} from "./dashboard/DashboardComp";
import {EmployeeDashboardComp} from "./employee-dashboard/EmployeeDashboardComp";
import { SidebarComp } from './sidebar-t/SidebarComp';

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
  },
  {
    path: 'employee-dashboard',
    component: EmployeeDashboardComp,
    children:[{
      path: 'employee-dashboard',
      component: EmployeeDashboardComp
    }]
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";


@Component({
  selector: 'MainLayoutComp',
  templateUrl: './MainLayoutComp.html',
  styleUrls: ['./MainLayoutComp.scss']
})
export class MainLayoutComp {

  constructor(private router: Router) {

  }


  goToHome(){
    console.log("home routing button working properly");
    this.router.navigateByUrl('/employee-dashboard')
    
      }
    
      viewEmployeeList(){
        console.log("list of all emloyee");
        this.router.navigateByUrl('/employee-list')
      }
    
      viewYourAttendance(){
        console.log("your attendance");
        this.router.navigateByUrl('/employee-attendance')
      }
    
      viewYourPayroll(){
        console.log("your payroll");
        this.router.navigateByUrl('/employee-payroll')
      }
      makeLeaveRequest(){
        console.log("leave request");
        this.router.navigateByUrl('/employee-leave')
      }
}



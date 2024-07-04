import {Component, OnInit} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {FormService} from "../common/service/form-service";
import {EmployeeLoginCompService} from "./EmployeeLoginCompService";
import {tap} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {ToastrService} from "ngx-toastr";
import {UserRequest} from "../dto/UserRequest";
import {UserResponse} from "../dto/UserResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'EmployeeLoginComp',
  templateUrl: './EmployeeLoginComp.html',
  styleUrls: ['./EmployeeLoginComp.scss']
})
export class EmployeeLoginComp implements OnInit{


  userRequestFg: FormGroup = this.formService.makeBlankForm(UserRequest);

  constructor(private formService: FormService,
              private employeeLoginCompService: EmployeeLoginCompService,
              private router: Router,
              private notify: ToastrService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.employeeLoginCompService.login(this.userRequestFg)
      .pipe(tap((res: ApiResponse<UserResponse> | null) => {
        //console.log("Test Response: ",res)
        if (res) {
          this.notify.success("Login Success");
          this.onResetAndPatch();
          //console.log("Test Response: ",res)
          const token: string | null = res?.data?.token;
          const userID: string | null = res?.data?.username;
          if (token) {
            localStorage.setItem('Authorization', token);
          }
          if (userID) {
            localStorage.setItem('userID', userID);
          }
          this.router.navigateByUrl('/employee-dashboard')
        }
      })
    ).subscribe(res => {
      console.log("Test Response: ",res)
    },
      error => {
        console.log("Test error: ",error)
      });
  }

  private onResetAndPatch() {
    this.userRequestFg.reset();
  }
}

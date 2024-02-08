import {Component, OnInit} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {FormService} from "../common/service/form-service";
import {EmployeeLoginCompService} from "./EmployeeLoginCompService";
import {tap} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {ToastrService} from "ngx-toastr";
import {UserRequest} from "../dto/UserRequest";
import {UserResponse} from "../dto/UserResponse";

@Component({
  selector: 'EmployeeLoginComp',
  templateUrl: './EmployeeLoginComp.html',
  styleUrls: ['./EmployeeLoginComp.scss']
})
export class EmployeeLoginComp implements OnInit{


  userRequestFg: FormGroup = this.formService.makeBlankForm(UserRequest);

  constructor(private formService: FormService,
              private employeeLoginCompService: EmployeeLoginCompService,
              private notify: ToastrService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.employeeLoginCompService.login(this.userRequestFg).pipe(
      tap((res: ApiResponse<Array<UserResponse>> | null) => {
        if (res) {
          this.notify.success("Login Success");
          this.onResetAndPatch();
        }
      })
    ).subscribe(e => e);
  }

  private onResetAndPatch() {
    this.userRequestFg.reset();
  }
}

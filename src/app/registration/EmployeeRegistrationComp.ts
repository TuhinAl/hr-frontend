import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { FormService } from "../common/service/form-service";
import { ApiResponse } from "../common/util/ApiResponse";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeRegistrationCompService } from "./EmployeeRegistrationCompService";

@Component({
  selector: 'EmployeeDashboardComp',
  templateUrl: './EmployeeRegistrationComp.html',
  styleUrls: ['./EmployeeRegistrationComp.scss']
})
export class EmployeeRegistrationComp implements OnInit {

  employeeInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeInfoDto);

  constructor(private formService: FormService,
              private notify: ToastrService,
              private router: Router,
              private employeeRegistrationCompService: EmployeeRegistrationCompService) {


  }

  ngOnInit(): void {
  }

  registration() {
    const employeeInfoDto: EmployeeInfoDto = new EmployeeInfoDto(this.employeeInfoDtoFg.value);
    if (this.isValid(employeeInfoDto)) {
      if (employeeInfoDto.password && employeeInfoDto.confirmPassword) {
        if (employeeInfoDto.password !== employeeInfoDto.confirmPassword) {
          this.notify.error("Your Password and Confirmed Password didn't match.");
          return;
        } else {
          this.employeeRegistrationCompService.save(this.employeeInfoDtoFg).pipe(
            tap((res: ApiResponse<Array<EmployeeInfoDto>> | null) => {
              if (res) {
                this.notify.success("Employee Registered Completed.", "Success");
                this.onResetAndPatch();
                this.router.navigateByUrl('/login')
              }
            })
          ).subscribe(e => e);
        }
      }
    }
  }

  private onResetAndPatch() {
    this.employeeInfoDtoFg.reset();
  }

  /*  show
    success
    error
    info
    warning*/
  isValid(employeeInfoDto: EmployeeInfoDto): boolean {
    if (!employeeInfoDto.firstName || !employeeInfoDto.lastName || !employeeInfoDto.username
      || !employeeInfoDto.password || !employeeInfoDto.confirmPassword || !employeeInfoDto.mobile) {
      this.notify.info("Please Enter Required field.", "Required");
      return false;
    } else {
      return true;
    }
  }
}

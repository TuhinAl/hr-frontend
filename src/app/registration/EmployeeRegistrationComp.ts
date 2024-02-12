import {Component, OnInit} from "@angular/core";
import {tap} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {EmployeeRegistrationCompService} from "./EmployeeRegistrationCompService";
import {FormGroup} from "@angular/forms";
import {EmployeeInfoDto} from "../dto/EmployeeInfoDto";
import {FormService} from "../common/service/form-service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'EmployeeRegistrationComp',
  templateUrl: './EmployeeRegistrationComp.html',
  styleUrls: ['./EmployeeRegistrationComp.scss']
})
export class EmployeeRegistrationComp  implements OnInit{

  employeeInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeInfoDto);

  constructor(private formService: FormService,
              private notify: ToastrService,
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
        }else {
          this.notify.success("Employee Registered Completed.", "Success");
          /*        this.employeeRegistrationCompService.save(this.employeeInfoDtoFg).pipe(
                        tap((res: ApiResponse<Array<EmployeeInfoDto>> | null) => {
                          if (res) {
                            this.notify.success("Login Success");
                            this.onResetAndPatch();
                          }
                        })
                      ).subscribe(e => e);*/
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
    console.log("inside isvalid");
    if (!employeeInfoDto.firstName || !employeeInfoDto.lastName || !employeeInfoDto.username
      || !employeeInfoDto.password || !employeeInfoDto.confirmPassword || !employeeInfoDto.mobile) {
      this.notify.info("Please Enter Required field.", "Required");
      return false;
    }else {
      return true;
    }
  }
}

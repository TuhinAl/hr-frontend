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
              private employeeRegistrationCompService:EmployeeRegistrationCompService) {

  }

  ngOnInit(): void {
  }
  registration() {
    this.employeeRegistrationCompService.save(this.employeeInfoDtoFg).pipe(
      tap((res: ApiResponse<Array<EmployeeInfoDto>> | null) => {
        if (res) {
          this.notify.success("Login Success");
          this.onResetAndPatch();
        }
      })
    ).subscribe(e => e);
  }

  private onResetAndPatch() {
    this.employeeInfoDtoFg.reset();
  }
}

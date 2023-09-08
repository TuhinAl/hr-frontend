import {Component, OnInit} from "@angular/core";
import { FormGroup } from "@angular/forms";
import {EmployeeAccountInfoDto} from "../dto/EmployeeAccountInfoDto";
import {FormService} from "../common/service/form-service";
import {EmployeeLoginCompService} from "./EmployeeLoginCompService";
import {tap} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'EmployeeLoginComp',
  templateUrl: './EmployeeLoginComp.html',
  styleUrls: ['./EmployeeLoginComp.scss']
})
export class EmployeeLoginComp implements OnInit{


  employeeAccountInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeAccountInfoDto);

  constructor(private formService: FormService,
              private employeeLoginCompService: EmployeeLoginCompService,
              private notify: ToastrService) {

  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.employeeAccountInfoDtoFg.value);
    this.employeeLoginCompService.save(this.employeeAccountInfoDtoFg).pipe(
      tap((res: ApiResponse<Array<EmployeeAccountInfoDto>> | null) => {
        if (res) {
          this.notify.success("Login Success");
          this.onResetAndPatch();
        }
      })
    ).subscribe(e => e);
  }

  private onResetAndPatch() {
    this.employeeAccountInfoDtoFg.reset();
  }
}

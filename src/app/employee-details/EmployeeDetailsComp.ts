import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { FormService } from "../common/service/form-service";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeDetailsCompService } from "./EmployeeDetailsCompService";
import { ApiResponse } from "../common/util/ApiResponse";

@Component({
  selector: 'EmployeeDetailsComp',
  templateUrl: './EmployeeDetailsComp.html',
  styleUrls: ['./EmployeeDetailsComp.scss']
})
export class EmployeeDetailsComp implements OnInit{

  employeeInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeInfoDto);
  employeeID: string | null = null;
  enType: string | null = null;
  employeeInfoDto: EmployeeInfoDto = new EmployeeInfoDto();

  constructor(private formService: FormService,
              private notify: ToastrService,
              private employeeDetailsCompService: EmployeeDetailsCompService) {
    this.employeeID = localStorage.getItem('id');

  }

  ngOnInit(): void {
    this.search();
  }


  search() {
    this.employeeDetailsCompService.search(this.employeeID).pipe(
      tap((res: ApiResponse<Array<EmployeeInfoDto>> | null) => {
        if (res) {
          this.employeeInfoDto = res.data['content'][0];
          this.dataPrint(this.employeeInfoDto);
        }
      })
    ).subscribe(e => e);
  }

  dataPrint(employeeInfoDto: EmployeeInfoDto) {
    console.log('datalog', employeeInfoDto.firstName)
  }
  private onResetAndPatch() {
    this.employeeInfoDtoFg.reset();
  }

 
}

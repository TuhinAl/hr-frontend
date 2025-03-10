import { Component, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { EmployeeInfoSearchDto } from "../dto/EmployeeInfoSearchDto";
import { EmployeeListCompService } from "./EmployeeListCompService";
import { Page } from "../common/model/page";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { CurrentPage } from "../common/model/current-page";
import { ApiResponse } from "../common/util/ApiResponse";

@Component({
  selector: 'EmployeeListComp',
  templateUrl: './EmployeeListComp.html',
  styleUrls: ['./EmployeeListComp.scss']
})
export class EmployeeListComp implements OnInit{
  
  columnDef: ColDef[] = [
    {headerName: 'Employee Name', field: 'firstName', width: 250, editable: false, colId: 'firstName', filter: true},
    {headerName: 'Employee ID', field: 'employeeNcId', width: 250, editable: false, colId: 'employeeNcId', filter: true},
    {headerName: 'Email', field: 'email', width: 200, editable: false, colId: 'email', filter: true},
  ];
  id: string | null = null
  employeeInfoDtoPage: Page<EmployeeInfoDto> = new Page()

  
  constructor(private employeeListCompService : EmployeeListCompService) { 
   this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.searchEmployee()
  }

  searchEmployee() {
    const employeeSearch: EmployeeInfoSearchDto = new EmployeeInfoSearchDto();
    employeeSearch.page = 0;
    employeeSearch.size = 10;
    employeeSearch.id = this.id
    this.employeeListCompService.search(employeeSearch)
      .subscribe((res: ApiResponse<Page<EmployeeInfoDto>> | null) => {
        if (res && res.data.content) {
          this.employeeInfoDtoPage = res.data;
          this.priintEmployeeInfo(this.employeeInfoDtoPage);
        }
      });

  }

priintEmployeeInfo(data: Page<EmployeeInfoDto>){
console.log(data);
}

}

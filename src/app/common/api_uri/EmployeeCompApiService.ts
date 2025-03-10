import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Page } from "src/app/common/model/page";


import { EmployeeInfoDto } from "src/app/dto/EmployeeInfoDto";
import { EmployeeInfoSearchDto } from "src/app/dto/EmployeeInfoSearchDto";
import { ApiResponse } from "../util/ApiResponse";
import { ApiService } from "../util/ApiService";
import { apiUriLocationEmployee } from "./ApiUriLocationEmployee";

@Injectable()
export class EmployeeCompApiService {

    constructor(private apiService: ApiService) {
    }
  
    save(employeeInfoDto: EmployeeInfoDto): Observable<ApiResponse<EmployeeInfoDto>> {
        return this.apiService.postV2(apiUriLocationEmployee.employee_login, employeeInfoDto);
    }
  
    update(employeeInfoDto: EmployeeInfoDto): Observable<ApiResponse<EmployeeInfoDto>> {
        return this.apiService.putV2(apiUriLocationEmployee.employee_login, employeeInfoDto);
    }
  
    searchOtQueue(searchDto: EmployeeInfoSearchDto): Observable<ApiResponse<Page<EmployeeInfoDto>>> {
        return this.apiService.postV2(apiUriLocationEmployee.employee_search, searchDto);
    }


}

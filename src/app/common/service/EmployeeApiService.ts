import {EmployeeAccountInfoDto} from "../../dto/EmployeeAccountInfoDto";
import {apiUriLocationEmployee} from "../api_uri/ApiUriLocationEmployee";
import {Observable} from "rxjs";
import {ApiResponse} from "../util/ApiResponse";
import {ApiService} from "../util/ApiService";
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeApiService {

  constructor(private apiService: ApiService) {
  }

  save(employeeAccountInfoDto: EmployeeAccountInfoDto): Observable<ApiResponse<EmployeeAccountInfoDto>> {
    return this.apiService.postV2(apiUriLocationEmployee.employee_login, employeeAccountInfoDto);
  }
}

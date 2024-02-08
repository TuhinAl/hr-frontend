import {apiUriLocationEmployee} from "../api_uri/ApiUriLocationEmployee";
import {Observable} from "rxjs";
import {ApiResponse} from "../util/ApiResponse";
import {ApiService} from "../util/ApiService";
import {Injectable} from "@angular/core";
import {EmployeeInfoDto} from "../../dto/EmployeeInfoDto";
import {UserRequest} from "../../dto/UserRequest";
import {UserResponse} from "../../dto/UserResponse";

@Injectable()
export class EmployeeApiService {

  constructor(private apiService: ApiService) {
  }

  registration(employeeInfoDto: EmployeeInfoDto): Observable<ApiResponse<EmployeeInfoDto>> {
    return this.apiService.postV2(apiUriLocationEmployee.employee_registration, employeeInfoDto);
  }

  login(userRequest: UserRequest): Observable<ApiResponse<UserResponse>> {
    return this.apiService.postV2(apiUriLocationEmployee.employee_login, userRequest);
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AttendanceDto } from "../../dto/AttendanceDto";
import { EmployeeInfoDto } from "../../dto/EmployeeInfoDto";
import { EmployeeInfoSearchDto } from "../../dto/EmployeeInfoSearchDto";
import { UserRequest } from "../../dto/UserRequest";
import { UserResponse } from "../../dto/UserResponse";
import { apiUriLocationEmployee } from "../api_uri/ApiUriLocationEmployee";
import { ApiResponse } from "../util/ApiResponse";
import { ApiService } from "../util/ApiService";


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


  search(employeeInfoSearchDto: EmployeeInfoSearchDto): Observable<ApiResponse<Array<EmployeeInfoDto>>> {
    return this.apiService.postV2(apiUriLocationEmployee.employee_search, employeeInfoSearchDto);
  }

  checkInAdOut(attendanceDto: AttendanceDto): Observable<ApiResponse<AttendanceDto>> {
    return this.apiService.postV2(apiUriLocationEmployee.attendance, attendanceDto);
  }
}

import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { EmployeeApiService } from "../common/service/EmployeeApiService";
import { AttendanceDto } from "../dto/AttendanceDto";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeInfoSearchDto } from "../dto/EmployeeInfoSearchDto";
import { ApiResponse } from "../common/util/ApiResponse";
import { customErrorHandler } from "../common/util/ErrorMessageHandler";

@Injectable()
export class EmployeeDashboardCompService {
  constructor(private employeeApiService: EmployeeApiService,
              private notify: ToastrService) {
  }

  search(id: string | null): Observable<ApiResponse<Array<EmployeeInfoDto>> | null> {
    const employeeInfoSearchDto: EmployeeInfoSearchDto = new EmployeeInfoSearchDto();
    employeeInfoSearchDto.id = id;
    employeeInfoSearchDto.page = 0;
    employeeInfoSearchDto.size = 10;

    return this.employeeApiService.search(employeeInfoSearchDto).pipe(
      catchError(e => customErrorHandler(e, this.notify)),
    );
  }

  checkInAndOut(attendanceDto: AttendanceDto): Observable<ApiResponse<AttendanceDto> | null> {
    return this.employeeApiService.checkInAdOut(attendanceDto).pipe(
      catchError(e => customErrorHandler(e, this.notify)),
    );
  }
}

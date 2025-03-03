import {Injectable} from "@angular/core";
import {EmployeeApiService} from "../common/service/EmployeeApiService";
import {ToastrService} from "ngx-toastr";
import {customErrorHandler} from "../common/util/ErrorMessageHandler";
import {catchError} from "rxjs/operators";
import {EmployeeInfoDto} from "../dto/EmployeeInfoDto";
import {ApiResponse} from "../common/util/ApiResponse";
import {Observable} from "rxjs";
import {EmployeeInfoSearchDto} from "../dto/EmployeeInfoSearchDto";
import {AttendanceDto} from "../dto/AttendanceDto";

@Injectable()
export class EmployeeDetailsCompService {
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
}

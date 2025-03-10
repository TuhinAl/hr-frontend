import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { catchError, Observable } from "rxjs";
import { Page } from "../common/model/page";
import { EmployeeApiService } from "../common/service/EmployeeApiService";
import { ApiResponse } from "../common/util/ApiResponse";
import { customErrorHandler } from "../common/util/ErrorMessageHandler";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeInfoSearchDto } from "../dto/EmployeeInfoSearchDto";

@Injectable()
export class EmployeeListCompService {

  constructor(private employeeApiService: EmployeeApiService,
              private notify: ToastrService) {
  }

  search(searchDto: EmployeeInfoSearchDto): Observable<ApiResponse<Page<EmployeeInfoDto>> | null> {
    return this.employeeApiService.search(searchDto).pipe(
      catchError(e => customErrorHandler(e, this.notify)),
    )
  }


}
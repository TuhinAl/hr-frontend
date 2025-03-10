import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { EmployeeApiService } from "../common/service/EmployeeApiService";
import { customErrorHandler } from "../common/util/ErrorMessageHandler";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { ApiResponse } from "../common/util/ApiResponse";

@Injectable()
export class EmployeeRegistrationCompService {

  constructor(private employeeApiService: EmployeeApiService,
              private notify: ToastrService) {
  }

  save(employeeInfo: FormGroup): Observable<ApiResponse<Array<EmployeeInfoDto>> | null> {
    const employeeInfoDto: EmployeeInfoDto = new EmployeeInfoDto(employeeInfo.value);

    return this.employeeApiService.registration(employeeInfoDto).pipe(
      catchError(e => customErrorHandler(e, this.notify)),
    );
  }
}

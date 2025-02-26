import {Injectable} from "@angular/core";
import {EmployeeApiService} from "../common/service/EmployeeApiService";
import {ToastrService} from "ngx-toastr";
import {customErrorHandler} from "../common/util/ErrorMessageHandler";
import {catchError} from "rxjs/operators";
import {EmployeeInfoDto} from "../dto/EmployeeInfoDto";
import {ApiResponse} from "../common/util/ApiResponse";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

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

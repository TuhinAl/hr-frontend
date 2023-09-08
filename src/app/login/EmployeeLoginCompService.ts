import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {EmployeeAccountInfoDto} from "../dto/EmployeeAccountInfoDto";
import {EmployeeApiService} from "../common/service/EmployeeApiService";
import {catchError} from "rxjs/operators";
import {customErrorHandler} from "../common/util/ErrorMessageHandler";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class EmployeeLoginCompService {

  constructor(private employeeApiService: EmployeeApiService,
              private notify: ToastrService) {
  }

  save(employeeAccountInfo: FormGroup): Observable<ApiResponse<Array<EmployeeAccountInfoDto>> | null> {

    const employeeAccountInfoDto: EmployeeAccountInfoDto = new EmployeeAccountInfoDto(employeeAccountInfo.value);



    return this.employeeApiService.save(employeeAccountInfoDto).pipe(
      catchError(e => customErrorHandler(e, this.notify)),
    );
    /*  console.log(JSON.stringify(cateringDietRequisitionDto))
      return of();*/
  }
}

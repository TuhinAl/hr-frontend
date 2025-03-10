import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserRequest } from "../dto/UserRequest";
import { UserResponse } from "../dto/UserResponse";
import { ApiResponse } from "../common/util/ApiResponse";
import { customErrorHandler } from "../common/util/ErrorMessageHandler";
import { EmployeeApiService } from "../common/service/EmployeeApiService";

@Injectable()
export class EmployeeLoginCompService {

  constructor(private employeeApiService: EmployeeApiService,
              private notify: ToastrService) {
  }

  login(userRequestFg: FormGroup): Observable<ApiResponse<UserResponse> | null> {
    const userRequest: UserRequest = new UserRequest(userRequestFg.value);
    return this.employeeApiService.login(userRequest).pipe(
      catchError(e => customErrorHandler(e, this.notify)),
    );
  }
}

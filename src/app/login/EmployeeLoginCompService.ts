import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {EmployeeApiService} from "../common/service/EmployeeApiService";
import {catchError} from "rxjs/operators";
import {customErrorHandler} from "../common/util/ErrorMessageHandler";
import {ToastrService} from "ngx-toastr";
import {UserResponse} from "../dto/UserResponse";
import {UserRequest} from "../dto/UserRequest";

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

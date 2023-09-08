import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {throwError} from 'rxjs';
import {Observable} from "rxjs";
import {ApiResponseCode} from "./ApiResponseCode";

export function showError(httpErrorResponse: any, toastr: ToastrService): void {
  console.error(httpErrorResponse.error)
  if (httpErrorResponse.error instanceof ProgressEvent) {
    toastr.error('No internet', 'Message');
  } else if (httpErrorResponse.error['apiResponseCode'] === ApiResponseCode.USER_INFORM_ERROR) {
    toastr.error(httpErrorResponse.error['message'], 'Message');
  } else if (httpErrorResponse.error['apiResponseCode'] === ApiResponseCode.FORBIDDEN) {
    toastr.error('Having API access control related issue, please contact with system administrator', 'Message');
  } else {
    //toastr.error('Unknown exception, please contact with system administrator ', 'Message');
  }

}


export function customErrorHandler(httpErrorResponse: HttpErrorResponse, notify: ToastrService): Observable<any> {
  console.log({httpErrorResponse})
  if (httpErrorResponse.error['message'] &&
    httpErrorResponse.error['apiResponseCode'] === "USER_INFORM_ERROR" &&
    httpErrorResponse.error['httpStatusCode'] === 500 &&
    httpErrorResponse.error['status'] === false) {
    notify.error(httpErrorResponse.error['message'])
  }
  return throwError(httpErrorResponse.error);
}

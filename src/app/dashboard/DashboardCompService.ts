import {Injectable} from "@angular/core";
import {EmployeeApiService} from "../common/service/EmployeeApiService";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class DashboardCompService {

  constructor(private employeeApiService: EmployeeApiService,
              private notify: ToastrService) {
  }

}

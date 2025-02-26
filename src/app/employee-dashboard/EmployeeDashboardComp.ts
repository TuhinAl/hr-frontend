import {Component, OnInit} from "@angular/core";
import {EmployeeDashboardCompService} from "./EmployeeDashboardCompService";
import {FormGroup} from "@angular/forms";
import {EmployeeInfoDto} from "../dto/EmployeeInfoDto";
import {FormService} from "../common/service/form-service";
import {ToastrService} from "ngx-toastr";
import {tap} from "rxjs";
import {ApiResponse} from "../common/util/ApiResponse";
import {AttendanceDto} from "../dto/AttendanceDto";
import {UserResponse} from "../dto/UserResponse";
import {Type} from "../enum/AttendanceEnum";

@Component({
  selector: 'EmployeeDashboardComp',
  templateUrl: './EmployeeDashboardComp.html',
  styleUrls: ['./EmployeeDashboardComp.scss']
})
export class EmployeeDashboardComp implements OnInit{

  employeeInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeInfoDto);
  employeeID: string | null = null;
  enType: string | null = null;
  employeeInfoDto: EmployeeInfoDto = new EmployeeInfoDto();

  constructor(private formService: FormService,
              private notify: ToastrService,
              private employeeDashboardCompService: EmployeeDashboardCompService) {
    this.employeeID = localStorage.getItem('id');

  }

  ngOnInit(): void {
    this.search();
  }


  search() {
    this.employeeDashboardCompService.search(this.employeeID).pipe(
      tap((res: ApiResponse<Array<EmployeeInfoDto>> | null) => {
        if (res) {
          this.employeeInfoDto = res.data['content'][0];
          this.dataPrint(this.employeeInfoDto);
        }
      })
    ).subscribe(e => e);
  }

  dataPrint(employeeInfoDto: EmployeeInfoDto) {
    console.log('datalog', employeeInfoDto.firstName)
  }
  private onResetAndPatch() {
    this.employeeInfoDtoFg.reset();
  }


  checkIn() {
    const attendanceDto: AttendanceDto = new AttendanceDto();
    if (this.employeeID) {
      attendanceDto.employeeId = this.employeeID;
      attendanceDto.employeeNcId = this.employeeInfoDto.employeeNcId;
      attendanceDto.checkInOutTypeKey = Type.CHECK_IN;
    }
    this.checkInAndOut(attendanceDto);
  }


  checkOut() {
    const attendanceDto: AttendanceDto = new AttendanceDto();
    if (this.employeeID) {
      attendanceDto.employeeId = this.employeeID;
      attendanceDto.employeeNcId = this.employeeInfoDto.employeeNcId;
      attendanceDto.checkInOutTypeKey = Type.CHECK_OUT;
    }
    this.checkInAndOut(attendanceDto);
  }

  checkInAndOut(attendanceDto: AttendanceDto) {

    this.employeeDashboardCompService.checkInAndOut(attendanceDto).pipe(
      tap((res: ApiResponse<AttendanceDto> | null) => {

      /*  if ((res?.data?.isAlreadyCheckedIn)) {
          this.notify.warning("You already Checked-In for Today.");
          return;
        }
        if ((res?.data?.isAlreadyCheckedOut)) {
          this.notify.warning("You already Checked-Out for Today.");
          return;
        }*/
        if (res?.data?.checkInOutTypeKey === Type.CHECK_IN) {
          this.notify.success("You Checked In.","Good Morning!");
        }
        if (res?.data?.checkInOutTypeKey === Type.CHECK_OUT) {
          this.notify.info("You Checked Out.","Great Day!");
        }
      })
    ).subscribe(e => e);
  }
}

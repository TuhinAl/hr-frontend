import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { FormService } from "../common/service/form-service";
import { ApiResponse } from "../common/util/ApiResponse";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeLeaveCompService } from "./EmployeeLeaveCompService";
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'EmployeeLeaveComp',
  templateUrl: './EmployeeLeaveComp.html',
  styleUrls: ['./EmployeeLeaveComp.scss']
})
export class EmployeeLeaveComp implements OnInit {

  employeeInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeInfoDto);
  employeeId: string | null = null;
  enType: string | null = null;
  employeeInfoDto: EmployeeInfoDto | null = new EmployeeInfoDto();
  static readonly HALLF_DAY = 'Half Day';
  static readonly FULL_DAY = 'Full Day';
  // Add form controls for date pickers
  startDate = new FormControl();
  endDate = new FormControl();
  isFullDay = false;
  isHalfDay = false;
  leaveType: string;
  days: string[] = [EmployeeLeaveComp.HALLF_DAY, EmployeeLeaveComp.FULL_DAY];

  constructor(private formService: FormService,
    private route: ActivatedRoute,
    private router: Router,
    private notify: ToastrService,
    private employeeLeaveCompService: EmployeeLeaveCompService) {
    this.employeeId = localStorage.getItem('id');

    // Get the employee from router state
    const navigation = this.router.getCurrentNavigation();
    console.log('navigation', navigation?.extras.state);

    if (navigation?.extras.state) {
      this.employeeInfoDto = navigation.extras.state['employee'] as EmployeeInfoDto;
    }

  }

  ngOnInit(): void {
    // As fallback, get the employee ID from the route params
    // this.employeeId = this.route.snapshot.paramMap.get('id');
    this.search();
  }


  onFullDayChange(event: any) {
    this.isFullDay = event.target.checked;
    this.isHalfDay = false; // Uncheck half day if full day is checked
    console.log('Full Day:', this.isFullDay);

  }

  // Add a method to print date values when they change
  onDateChange() {
    console.log('Start Date:', this.startDate.value);
    console.log('End Date:', this.endDate.value);

    // If you need formatted dates (YYYY-MM-DD format)
    if (this.startDate.value) {
      const formattedStartDate = new Date(this.startDate.value).toISOString().split('T')[0];
      console.log('Formatted Start Date:', formattedStartDate);
    }

    if (this.endDate.value) {
      const formattedEndDate = new Date(this.endDate.value).toISOString().split('T')[0];
      console.log('Formatted End Date:', formattedEndDate);
    }
  }

  search() {
    this.employeeLeaveCompService.search(this.employeeId).pipe(
      tap((res: ApiResponse<Array<EmployeeInfoDto>> | null) => {
        if (res) {
          this.employeeInfoDto = res.data['content'][0];
          this.dataPrint(this.employeeInfoDto);
        }
      })
    ).subscribe(e => e);
  }

  dataPrint(employeeInfoDto: EmployeeInfoDto | null) {
    console.log('datalog', employeeInfoDto?.firstName)
  }
  private onResetAndPatch() {
    this.employeeInfoDtoFg.reset();
  }
}

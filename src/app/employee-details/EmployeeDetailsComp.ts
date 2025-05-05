import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { FormService } from "../common/service/form-service";
import { ApiResponse } from "../common/util/ApiResponse";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeDetailsCompService } from "./EmployeeDetailsCompService";

@Component({
  selector: 'EmployeeDetailsComp',
  templateUrl: './EmployeeDetailsComp.html',
  styleUrls: ['./EmployeeDetailsComp.scss']
})
export class EmployeeDetailsComp implements OnInit{

  employeeInfoDtoFg: FormGroup = this.formService.makeBlankForm(EmployeeInfoDto);
  employeeId: string | null = null;
  enType: string | null = null;
  employeeInfoDto: EmployeeInfoDto | null = new EmployeeInfoDto();

  constructor(private formService: FormService,
    private route: ActivatedRoute,
    private router: Router,
              private notify: ToastrService,
              private employeeDetailsCompService: EmployeeDetailsCompService) {
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


  search() {
    this.employeeDetailsCompService.search(this.employeeId).pipe(
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

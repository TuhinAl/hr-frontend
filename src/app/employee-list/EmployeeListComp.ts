import { Component, OnInit } from "@angular/core";
import { ColDef, GridOptions, GridReadyEvent } from "ag-grid-community";
import { Page } from "../common/model/page";
import { EmployeeInfoDto } from "../dto/EmployeeInfoDto";
import { EmployeeInfoSearchDto } from "../dto/EmployeeInfoSearchDto";
import { EmployeeListCompService } from "./EmployeeListCompService";
import { Router } from '@angular/router';


@Component({
  selector: 'EmployeeListComp',
  templateUrl: './EmployeeListComp.html',
  styleUrls: ['./EmployeeListComp.scss']
})
export class EmployeeListComp implements OnInit {
  

  id: string | null = null
  employeeInfoDtoPage: Page<EmployeeInfoDto> = new Page()
  rowData: EmployeeInfoDto[] = [];
  // empColumnDef: ColDef[] = [
  //   {headerName: 'Employee Name', field: 'firstName', width: 250, editable: false, colId: 'firstName', filter: true},
  //   {headerName: 'Employee ID', field: 'employeeNcId', width: 250, editable: false, colId: 'employeeNcId', filter: true},
  //   {headerName: 'Email', field: 'email', width: 200, editable: false, colId: 'email', filter: true},
  // ];

  empColumnDef: ColDef[] = [
    {
      headerName: 'Employee Name', 
      field: 'firstName', 
      width: 200, 
      editable: false, 
      colId: 'firstName', 
      filter: true,
      cellRenderer: params => {
        return params.data.firstName + ' ' + params.data.lastName;
      },
      // Add these properties
      cellClass: 'cell-wrap-text',
      autoHeight: true
    },
    {
      headerName: 'Employee ID', 
      field: 'employeeNcId', 
      width: 150, 
      editable: false, 
      colId: 'employeeNcId', 
      filter: true,
      cellClass: 'cell-wrap-text'
    },
    {
      headerName: 'Email', 
      field: 'email', 
      width: 200, 
      editable: false, 
      colId: 'email', 
      filter: true,
      cellClass: 'cell-wrap-text'
    }
  ];
  

// Enhance your onGridReady method
onGridReady(params: GridReadyEvent) {
  if (params.api) {
    // Force a redraw of the grid
    params.api.sizeColumnsToFit();
    
    // Add a small delay to ensure grid renders correctly
    setTimeout(() => {
      params.api.redrawRows();
    }, 100);
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (params.api) {
      setTimeout(() => {
        params.api.sizeColumnsToFit();
      }, 100);
    }
  });
}



  constructor(private employeeListCompService: EmployeeListCompService,
    private router: Router
  ) { 
    // Register the correct modules
    // ModuleRegistry.registerModules([ClientSideRowModelModule]);
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.searchEmployee({page: 0, size: 10});
  }

  searchEmployee(currentPage: any) {
    const employeeSearch: EmployeeInfoSearchDto = new EmployeeInfoSearchDto();
    employeeSearch.page = currentPage.page;
    employeeSearch.size = currentPage.size;
    employeeSearch.id = this.id;
    
    this.employeeListCompService.search(employeeSearch).subscribe(
      (response: any) => {
        this.employeeInfoDtoPage = response;
        this.rowData = this.employeeInfoDtoPage.content;
      },
      (error) => {
        console.error('Error fetching employee data:', error);
        // Fallback to dummy data in case of error
        this.loadDummyData();
      }
    );
  }
  
  loadDummyData() {
    // Initialize with dummy data as fallback
    this.employeeInfoDtoPage = new Page<EmployeeInfoDto>();
    this.employeeInfoDtoPage.content = [
      { 
        id: '1',
        employeeId: '10001',
        employeeNcId: 'EMP001',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
        mobile: '1234567890',
        password: 'password123',
        confirmPassword: 'password123',
        address: '123 Main St, New York, NY',
        designationTypeEnumKey: 'SOFTWARE_ENGINEER',
        designationTypeEnumValue: 'Software Engineer'
      },
      { 
        id: '2',
        employeeId: '10002',
        employeeNcId: 'EMP002',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        username: 'janesmith',
        mobile: '0987654321',
        password: 'password456',
        confirmPassword: 'password456',
        address: '456 Park Ave, Boston, MA',
        designationTypeEnumKey: 'SENIOR_DEVELOPER',
        designationTypeEnumValue: 'Senior Developer'
      },
      { 
        id: '3',
        employeeId: '10003',
        employeeNcId: 'EMP003',
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.j@example.com',
        username: 'michaelj',
        mobile: '5556667777',
        password: 'password789',
        confirmPassword: 'password789',
        address: '789 Oak St, Chicago, IL',
        designationTypeEnumKey: 'PROJECT_MANAGER',
        designationTypeEnumValue: 'Project Manager'
      },
      { 
        id: '4',
        employeeId: '10004',
        employeeNcId: 'EMP004',
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emily.b@example.com',
        username: 'emilyb',
        mobile: '1112223333',
        password: 'password321',
        confirmPassword: 'password321',
        address: '321 Elm St, San Francisco, CA',
        designationTypeEnumKey: 'HR_MANAGER',
        designationTypeEnumValue: 'HR Manager'
      },
      { 
        id: '5',
        employeeId: '10005',
        employeeNcId: 'EMP005',
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.w@example.com',
        username: 'davidw',
        mobile: '9998887777',
        password: 'password654',
        confirmPassword: 'password654',
        address: '654 Pine St, Seattle, WA',
        designationTypeEnumKey: 'SYSTEM_ANALYST',
        designationTypeEnumValue: 'System Analyst'
      }
    ];
    
    // Set row data for AG Grid
    this.rowData = this.employeeInfoDtoPage.content;
    this.employeeInfoDtoPage.pageable = {
      sort: {
        sorted: true,
        unsorted: false,
        empty: false
      },
      pageSize: 10,
      pageNumber: 0,
      offset: 0,
      unpaged: false,
      paged: true
    };
    this.employeeInfoDtoPage.totalElements = 5;
    this.employeeInfoDtoPage.last = true;
    this.employeeInfoDtoPage.totalPages = 1;
    this.employeeInfoDtoPage.first = true;
    this.employeeInfoDtoPage.number = 0;
    this.employeeInfoDtoPage.numberOfElements = 5;
    this.employeeInfoDtoPage.size = 10;
    this.employeeInfoDtoPage.empty = false;
  }


  viewDetails(employee: EmployeeInfoDto) {
    // Implement the logic to view employee details
    console.log('View details for:', employee);
    // You can navigate to a different route or open a modal with employee details

    // Navigate to the employee details page with employee ID parameter

    // In the viewDetails method
    /* this.router.navigate(['/employee-details', employee.id], {
      state: { employee: employee }
    }); */
    this.router.navigate(['/employee-details'], {
      state: { employee: employee }
    });
  }
}

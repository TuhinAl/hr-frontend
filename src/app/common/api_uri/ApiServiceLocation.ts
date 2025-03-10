import { environment } from "src/environments/environment";

export const apiServiceLocation = {
    authentication: environment.employee_login_service + '/api/auth/authenticate',
    // employee: environment.employee_login_service + '/api/v1/employee',
    employee: environment.employee_login_service,
    
  };
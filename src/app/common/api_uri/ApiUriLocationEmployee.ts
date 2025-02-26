import { ApiServiceLocation } from "./ApiServiceLocation";

export const apiUriLocationEmployee = {
  employee_registration: `${ApiServiceLocation.employee}/api/auth/register`,
  employee_login: `${ApiServiceLocation.employee}/api/auth/authenticate`,



  employee_search: `${ApiServiceLocation.employee}/employee-info/search`,
  attendance: `${ApiServiceLocation.employee}/attendance`,
}

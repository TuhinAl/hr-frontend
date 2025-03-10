import { apiServiceLocation } from "./ApiServiceLocation";

export const apiUriLocationEmployee = {
  employee_registration: `${apiServiceLocation.employee}/api/auth/register`,
  employee_login: `${apiServiceLocation.employee}/api/auth/authenticate`,
  employee_search: `${apiServiceLocation.employee}/employee-info/search`,
  attendance: `${apiServiceLocation.employee}/attendance`,
}

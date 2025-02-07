// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// This is for local
export const environment = {
  production: false,
  profile: 'local',
  employee_login_service: 'http://localhost:9000',
  authentication_service_url: 'http://116.68.206.158:9009',
  registration_service_url: 'http://localhost:9009',
  opd_service_url: 'http://localhost:9009',
  file_service_url: 'http://localhost:9009',
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

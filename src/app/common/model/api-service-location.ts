import {environment} from '../../../environments/environment';

export const apiServiceLocation = {
  authentication: environment.authentication_service_url + '/api/v1/authentication',
  registration: environment.registration_service_url + '/api/v1/registration',
  pathology: environment.lis_service_url + '/api/v1/lis',
  opd: environment.opd_service_url + '/api/v1/opd',
  pharmacy: environment.pharmacy_service_url + '/api/v1/pharmacy',
  radiology: environment.ris_service_url + '/api/v1/ris',
  file: environment.file_service_url + '/api/v1/file',
  billing: environment.billing_service_url + '/api/v1/billing',
  clinical: environment.clinical_service_url + '/api/v1/clinical',
};

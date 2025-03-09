export class JwtTokenDto {

  authorities: Array<string>;
  client_id: string;
  exp : number;
  jti : string;
  scope : Array<string>;
  user_name : string;  //PrincipleDto as json string

  principleDto : PrincipleDto;  //PrincipleDto as json string


  constructor(o?:Partial<PrincipleDto>) {
    Object.assign(this,o)
  }

}


export class PrincipleDto {

  userType: string;
  patientAccountAuthDto: PatientAccountAuthDto;
  employeeAuthDto: EmployeeAuthDto;
  constructor(o?:Partial<PrincipleDto>) {
    Object.assign(this,o)
  }
}


export class PatientAccountAuthDto {

  id: string;
  username: string;
  fullName: string;
  constructor(o?:Partial<PatientAccountAuthDto>) {
    Object.assign(this,o)
  }
}

export class EmployeeAuthDto {

  id: string;
  username: string;
  fullName: string;
  constructor(o?:Partial<EmployeeAuthDto>) {
    Object.assign(this,o)
  }
}


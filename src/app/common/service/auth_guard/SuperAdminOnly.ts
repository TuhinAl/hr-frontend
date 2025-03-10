import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserAuthService} from '../user-auth.service';
import {JwtService} from "../JwtService";

@Injectable()
export class SuperAdminOnly implements CanActivate {

  constructor( private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.haveAccessInThisElement(route.data['menuId'])){
      return true;
    }
    //this.router.navigateByUrl('/auth/login');
    this.router.navigateByUrl('/module/dashboard');
    return false;
  }

  haveAccessInThisElement(elementIdList:Array<string>): boolean {
    console.log(elementIdList)
    const roleNameList = this.jwtService.getEmployeeRoleNameList();
    const componentIdList = this.jwtService.getUiComponentIdListByEmployeeRole();
    if(roleNameList.filter(e => e === "super-admin").length > 0){
      return true;
    }
    console.log(componentIdList)
    return componentIdList.filter((e:string) => (elementIdList.findIndex((i:string) => i === e)) >= 0 ).length > 0;

  }

}

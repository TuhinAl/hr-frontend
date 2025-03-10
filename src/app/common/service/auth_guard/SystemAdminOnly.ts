import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserAuthService} from '../user-auth.service';
import {JwtService} from "../JwtService";

@Injectable()
export class SystemAdminOnly implements CanActivate {

  constructor( private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.haveAccessInThisElement(route.data['menuId'])){
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }

  haveAccessInThisElement(elementIdList:Array<string>): boolean {
    console.log(elementIdList)
    const roleNameList = this.jwtService.getEmployeeRoleNameList();
    if(roleNameList.filter(e => e === "system-admin" || e === "super-admin").length > 0){
      return true;
    }
    return false;

  }
}

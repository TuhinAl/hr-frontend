import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {JwtService} from "../JwtService";

@Injectable()
export class HaveMenuAccess implements CanActivate {

  constructor(private router: Router, private jwtService: JwtService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.jwtService.isAccessTokenValid()){
      this.jwtService.destroyToken();
      this.router.navigateByUrl('/auth/login');
    }
    if(this.haveAccessInThisElement(route.data['menuId']) ){
      return true;
    }
    this.router.navigateByUrl('/module/dashboard');
    return false;
  }

  haveAccessInThisElement(elementIdList:Array<string>): boolean {
    const roleNameList = this.jwtService.getEmployeeRoleNameList();
    const componentIdList = this.jwtService.getUiComponentIdListByEmployeeRole();
    // console.log(roleNameList)
    // console.log(elementIdList)
    // console.log(componentIdList)
    if(roleNameList.filter(e => e === "system-admin" || e === "super-admin").length > 0){
      return true;
    }
    //console.log(componentIdList)
    if( componentIdList.find((e:string) => (elementIdList.find((i:string) => i === e) ))){
      return true;
    }else{
      console.error("Do not have access to this uri, auth guard exception")
      return false;
    }
  }

}

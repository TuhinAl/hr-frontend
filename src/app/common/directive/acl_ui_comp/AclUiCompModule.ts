import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AclUiCompService} from "../../service/AclUiCompService";
import {AclUiCompDirective} from "./AclUiCompDirective";

@NgModule({
  declarations: [
    AclUiCompDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AclUiCompService
  ],
  exports:[
    AclUiCompDirective
  ]
})
export class AclUiCompModule { }

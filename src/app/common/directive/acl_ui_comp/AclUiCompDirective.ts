import {Directive, ElementRef, Input, OnInit, ViewContainerRef} from '@angular/core';
import {AclUiCompService} from "../../service/AclUiCompService";
import {Router} from "@angular/router";
import {JwtService} from "../../service/JwtService";

@Directive({
  selector: '[acl]'
})
export class AclUiCompDirective implements OnInit {

  @Input("acl") acl: string;

  constructor( private viewContainer: ViewContainerRef,
    private elementRef: ElementRef,
    private aclUiCompService: AclUiCompService) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.display = "none";
    this.checkAccess();
  }

  checkAccess() {
    this.elementRef.nativeElement.style.display =
      this.aclUiCompService.haveAccessInThisElement(this.acl) ? "block" : "none";
  }

}

import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({ selector: '[ngVar]' })
export class VarDirective {

  @Input()
  set ngVar(context: unknown) {
    this.context.$implicit = this.context.ngVar = context;

    if (!this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    }
  }

  private context: { $implicit: unknown; ngVar: unknown; } = {
    $implicit: null,
    ngVar: null,
  };

  private hasView: boolean = false;

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
}


/*
<div *ngVar="false as variable">
  <span>{{variable | json}}</span>
</div>

<div *ngVar="false; let variable">
  <span>{{variable | json}}</span>
</div>
*/

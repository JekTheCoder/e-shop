import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngLet]',
  standalone: true
})
export class NgLetDirective<T = unknown> {

  private hasRendered = false;

  private context: Context<T> = {
    $implicit: null!,
    ngLet: null!
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<Context<T>>) { }

  @Input() set ngLet(expression: T) {
    this.context.$implicit = this.context.ngLet = expression;

    if(!this.hasRendered) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
      this.hasRendered = true;
    }
      
  };

}

interface Context<T = unknown> {
  $implicit: unknown,
  ngLet: T
}

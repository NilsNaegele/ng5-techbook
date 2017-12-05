import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNumberHost]',
})
export class NumberDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

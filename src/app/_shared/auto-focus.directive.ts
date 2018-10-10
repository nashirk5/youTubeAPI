import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    this.el.nativeElement.focus();
  }

}
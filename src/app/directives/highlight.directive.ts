import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() out = 'red';
  @Input() in = 'yellow';
  @HostBinding('style.backgroundColor') bg = 'red';
  constructor(public elementRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.in;
    this.elementRef.nativeElement.innerHTML = 'IN';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.out;
    this.elementRef.nativeElement.innerHTML = 'OUT';
  }

}

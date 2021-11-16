import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  // Les propriétés gérées par la directive
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() { }
  //Comportement
  @HostListener('keyup') onKeyUp() {
    this.color = this.bc = this.randomColor();
  }
  private randomColor(): string {
    return "#" + ((1<<24) * Math.random() | 0).toString(16);
  }

}

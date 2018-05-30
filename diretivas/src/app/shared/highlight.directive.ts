import { Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    this.backGroundColor = this.defaultColor;
    this.fontSize = this.fontZise+ 'px';
  }

  @HostListener('mouseleave') onmouseOut() {
    this.backGroundColor = this.highlightColor;
    this.fontSize = this.fontZise+ 'px';
  }

  @HostBinding('style.backgroundColor') backGroundColor: string;
  @HostBinding('style.fontSize') fontSize: string;
  
  @Input()  defaultColor: string = "white";
  @Input()  highlightColor: string = "yellow";
  @Input()  fontZise: number = 15;

  constructor() { }

  ngOnInt(){
    this.backGroundColor = this.defaultColor;
  }

}

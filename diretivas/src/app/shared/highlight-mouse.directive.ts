import { Directive, HostListener, ElementRef, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

   @HostListener('mouseenter') onMouseOver() {
  //   this._rederer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');
  //   this._rederer.setElementStyle(this._elementRef.nativeElement,'fontSize','20px');
    this.backGroundColor = 'yellow';
    this.fontSize = '25px';
   }

   @HostListener('mouseleave') onmouseOut() {
  //   this._rederer.setElementStyle(this._elementRef.nativeElement,'background-color','white');
  //   this._rederer.setElementStyle(this._elementRef.nativeElement,'fontSize','20px');
  this.backGroundColor = 'white';
  this.fontSize = '20px';

 }

  @HostBinding('style.backgroundColor') backGroundColor: string;
  @HostBinding('style.fontSize') fontSize: string;

  constructor(
    // private _elementRef:ElementRef,
    // private _rederer:Renderer
  ) { }

}

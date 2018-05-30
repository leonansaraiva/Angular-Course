import { Directive ,ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef:ElementRef,
    private _rederer:Renderer) { 
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor     = 'yellow';
    // this._elementRef.nativeElement.style.fontSize = '20px';
    this._rederer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');
    this._rederer.setElementStyle(this._elementRef.nativeElement,'fontSize','20px');

  }

}

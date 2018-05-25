import { Component, OnInit,Input,
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges,OnInit,DoCheck,AfterContentInit
    ,AfterContentChecked,AfterViewChecked,OnDestroy {


  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
   
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy (){
    this.log('ngOnDestroy');
  }

  log(valor) {
    console.log(valor);
  }

}

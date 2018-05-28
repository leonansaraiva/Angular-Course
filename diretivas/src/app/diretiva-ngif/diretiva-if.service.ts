import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiretivaIfService {


  constructor() { }

  cursos(){
    return  ['Angular','Java','JavaScript','NodeJs'];
  }
}

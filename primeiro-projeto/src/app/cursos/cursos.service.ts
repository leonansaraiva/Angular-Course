import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Injectable()//não foi necessário, acredito que por ser do angula 2
export class CursosService {

  constructor() { }

  //http
  getCursos() {
    return ['Java','Angular','Node','AspNet'];
  }


}

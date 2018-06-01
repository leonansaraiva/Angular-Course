import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();


  cursos: string [] =  ["Java","Angular","Node"];

  constructor(private _logService:LogService) {
    _logService.consoleLog('CursosService');
   }

  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso) {
    this._logService.consoleLog('Criando um novo curso '+ curso);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}

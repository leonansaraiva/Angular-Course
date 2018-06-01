import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  providers:[CursosService]
})
export class CriarCursosComponent implements OnInit {

  cursos: string[];
  
  constructor(private _cursosServices: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosServices.addCurso(curso);
  }

}

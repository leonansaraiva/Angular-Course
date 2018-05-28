import { Component, OnInit } from '@angular/core';
import { DiretivaIfService } from './diretiva-if.service';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {
  mostrarCursos: boolean = false;
  constructor(public diretivaIfService:DiretivaIfService ) { 

    console.log(diretivaIfService.cursos());
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  ngOnInit() {
  }

}

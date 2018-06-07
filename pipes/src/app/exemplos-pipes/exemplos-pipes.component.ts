import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.56321,
    numeroPaginas: 314,
    preco: 44.9,
    dataLancamento: new Date(2016,5,23),
    url: 'http://a.co/glgjpRP'
  };

  livros: string[] = ['Java','Angular 4'];
  filtro: string;

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor:string) {
    this.livros.push(valor);
  }

}

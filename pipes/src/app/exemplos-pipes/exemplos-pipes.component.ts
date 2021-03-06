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

  valorAsync = new Promise ((resolve, reject) => {
    setTimeout (()=> resolve('Valor assíncrono'), 2000)
  });

  constructor() { }

  ngOnInit() {
  }

  addCurso(valor:string) {
    this.livros.push(valor);
  }

  obterCursos(){
      
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === null ) {
      return this.livros;
    }

    let filter = this.filtro.toLocaleLowerCase();

    return this.livros.filter( (v) => { 
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ) {
        return true;
      }    
      return false;
    });
  }
 

}

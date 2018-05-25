import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:  string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://www.aascj.org.br/home/wp-content/uploads/2016/08/Olhar-do-gato-300x225.jpg';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = "abc";
  nomeDoCurso: string = 'Angular';
  novoValor: any;
  valorIncial: number = 15;
  
  pessoa: any = {
    nome: 'def',
    idade: 10
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botao clicado !');
  }

  onKeyUp(evento:KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    this.novoValor = evento.novoValor;
  }
  constructor() { }

  ngOnInit() {
  }

}

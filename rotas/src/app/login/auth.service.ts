import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  fazerLogin(usuario:Usuario){
    if(usuario.nome === 'leonan@email.com' && usuario.senha == '123456') {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
    }else {
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}

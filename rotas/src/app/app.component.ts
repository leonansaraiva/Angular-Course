import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mostrarMenu: boolean = false;

  constructor(private AuthService: AuthService) {
  }

  ngOnInit(){
    this.AuthService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnDestroy(){

  }


  
}

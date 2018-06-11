import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { cursosModulo } from './cursos/cursos.module';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    cursosModulo,
    AppRoutingModule,
    AlunosModule,
    CursosRoutingModule
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

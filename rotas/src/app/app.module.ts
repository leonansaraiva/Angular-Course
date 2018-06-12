import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';

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
    CursosModule,
    AppRoutingModule,
    AlunosModule,
    CursosRoutingModule
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

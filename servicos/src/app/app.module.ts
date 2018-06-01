import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

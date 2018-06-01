import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CursosService } from './cursos/cursos.service';
import { CriarCursosModule } from './criar-cursos/criar-cursos.module';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursosModule,
    CursosModule
  ],
  bootstrap: [AppComponent],
  providers: [LogService]
  // providers: [CursosService]

})
export class AppModule { }

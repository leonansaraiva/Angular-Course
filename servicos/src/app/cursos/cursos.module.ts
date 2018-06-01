import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from '../cursos/cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService]
})
export class AppModule { }

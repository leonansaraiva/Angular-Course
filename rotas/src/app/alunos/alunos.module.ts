import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoRoutingModule } from './aluno.routing.module';

@NgModule({
    imports: [
        CommonModule,
        AlunoRoutingModule
    ],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [],
    exports: []
  })
  export class AlunosModule { }
  
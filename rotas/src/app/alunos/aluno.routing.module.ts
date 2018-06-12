import { NgModule} from '@angular/core';

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AuthGuard } from '../guards/auth.guard';

const alunosRoutes: Routes  = [
    {path: 'alunos', component: AlunosComponent, children :[
        {path: 'novo', component: AlunoFormComponent,
            canActivate:[AuthGuard]
        },
        {path: ':id', component: AlunoDetalheComponent,
            canActivate:[AuthGuard]
        },
        {path: ':id/editar', component: AlunoFormComponent,
            canActivate:[AuthGuard]
        }
    ]
    }   
];

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})

export class AlunoRoutingModule{}
import { CursoGuard } from './../guards/cursos.guards';
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from "../guards/auth.guard";

const cursosRoutes: Routes = [
    {path: 'cursos', component: CursosComponent,
        canActivate:[AuthGuard],
        canActivateChild:[CursoGuard]
    },
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent,
        canActivate:[AuthGuard],
        canActivateChild:[CursoGuard]
    },
    {path: 'curso/:id', component: CursoDetalheComponent,
        canActivate:[AuthGuard],
        canActivateChild:[CursoGuard]
    }
];


@NgModule({
    imports:[RouterModule.forChild(cursosRoutes)],
    exports:[RouterModule]
})
export class CursosRoutingModule {}
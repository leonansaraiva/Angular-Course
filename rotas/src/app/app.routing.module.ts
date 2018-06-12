import { AuthGuard } from './guards/auth.guard';
import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent,
        canActivate:[AuthGuard]
    },
    {path: 'login', component: LoginComponent},
    // {path: 'cursos', component: CursosComponent},
    // {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    // {path: 'curso/:id', component: CursoDetalheComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
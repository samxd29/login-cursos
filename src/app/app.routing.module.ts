import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';



const appRoutes: Routes = [
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate : [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate : [AuthGuard],
    canLoad: [AuthGuard]
    //canActivateChild: [AlunosGuard]
    // se for fazer a guarda de rotas no component pai era declarado aqui
  },
  { path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PaginaNaoEncontradaComponent,
   canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  // as diretivas routerLink fazem parte do router module
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'alunos', loadChildren: () => import('./cursos/alunos/alunos.module').then(m => m.AlunosModule)},
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  // as diretivas routerLink fazem parte do router module
  exports: [RouterModule]
})
export class AppRoutingModule {}

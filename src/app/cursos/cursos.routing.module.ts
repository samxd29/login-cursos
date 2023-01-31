import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';


const cursosRoutes: Routes = [
  { path: '', component: CursosComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: ':id', component: CursoDetalheComponent},
];

@NgModule({
  //como temos um módulo de funcionalidades vamos utilizar o forChild
  imports: [RouterModule.forChild(cursosRoutes)],
  // as diretivas routerLink fazem parte do router module
  exports: [RouterModule]
})
export class CursosRoutingModule {}

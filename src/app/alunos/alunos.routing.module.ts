import { NgModule } from '@angular/core';
import { CanActivateChild, RouterModule } from '@angular/router';

import { AlunosGuard } from '../guards/alunos.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';

//rotas filhas
const alunosRoutes: any = [
  { path: '', component: AlunosComponent,
    CanActivateChild : [AlunosGuard],
    //quando quiser guardar as rotas filhas declarar aqui dentro do módulo;
  children: [
    { path: 'novo', component: AlunoFormComponent},
    { path: ':id', component: AlunoDetalheComponent},
    { path: ':id/editar', component: AlunoFormComponent},
  ]}
]
@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule{}

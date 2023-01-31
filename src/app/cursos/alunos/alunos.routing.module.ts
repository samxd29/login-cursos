import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

//rotas filhas
const alunosRoutes: any = [
  { path: '', component: AlunosComponent, children: [
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
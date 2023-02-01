import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunoService: AlunosService){}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    let id = route.params['id'];

    return this.alunoService.getAluno(id);
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './views/cadastro/pessoa/pessoa.component';
import { RelatoriosComponent } from './views/relatorios/relatorios/relatorios.component';

const routes: Routes = [
  { path: '', redirectTo:'/relatorios', pathMatch: 'full'},
  { path: 'cadastro', component: PessoaComponent },
  { path: 'relatorios', component: RelatoriosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

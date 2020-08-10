import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './views/cadastro/pessoa/pessoa.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RelatoriosComponent } from './views/relatorios/relatorios/relatorios.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'cadastro', component: PessoaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'relatorios', component: RelatoriosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

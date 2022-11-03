import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PessoaComponent } from './views/cadastro/pessoa/pessoa.component';
import { RelatoriosComponent } from './views/relatorios/relatorios/relatorios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AtualizarComponent } from './views/atualizar/atualizar.component';
import { EmptyComponent } from './views/empty/empty.component';
import { HelpComponent } from './help/help.component';
import { ExportsComponent } from './views/relatorios/exports/exports.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    RelatoriosComponent,
    AtualizarComponent,
    EmptyComponent,
    HelpComponent,
    ExportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AutocompleteLibModule,
    JwPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

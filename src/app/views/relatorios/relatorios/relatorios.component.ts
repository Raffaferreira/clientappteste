import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/relatorios';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { CadastroService } from 'src/app/services/cadastro.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  public paginaAtual = 1; 
  public keyword = "nome";
  public keywords = [ "nome", "email", "habilidades", "sexo"];
  pessoa = {} as Pessoa;
  pessoas: Pessoa[];
  pessoaExcluida: boolean
  pag : Number = 1;
  sexos = ['Masculino', 'Feminino']

  constructor(private relatorioService: RelatoriosService,
    private cadastroService: CadastroService) { }

  ngOnInit() {
    this.buscarPessoas();
  }

  buscarPessoas(){
    this.relatorioService.getRelatorios().subscribe((relatoriosResponse: Pessoa[]) => {
      this.pessoas = relatoriosResponse;
    });
  }

  adicionarPessoa(form: NgForm){
    if (this.pessoa.nome !== undefined) {
      this.cadastroService.cadastroPessoa(this.pessoa).subscribe((response: Pessoa) => {
        this.pessoas.push(response);
      });
    }
  }

  editarPessoa(pessoa: Pessoa){
    this.cadastroService.updatePessoa(1, pessoa).subscribe((response: Pessoa) => {
      this.pessoa = response;
    });
  }

  deletarPessoa(codigo: number, pessoa: Pessoa){
    this.cadastroService.deletePessoa(codigo).subscribe((excluido: boolean) => {
     this.pessoaExcluida = excluido;
     var index = this.pessoas.indexOf(pessoa);
     this.pessoas.splice(index, 1);
    });
  }

  
}

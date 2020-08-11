import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/relatorios';
import { RelatoriosService } from 'src/app/services/relatorios.service';
import { CadastroService } from 'src/app/services/cadastro.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AtualizarComponent } from '../../atualizar/atualizar.component';

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
  sexos = [
    { id: 1, name: "Masculino" },
    { id: 2, name: "Feminino" }]

  constructor(private relatorioService: RelatoriosService,
    private cadastroService: CadastroService,
    private modalService: NgbModal) { }

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
    const ref = this.modalService.open(AtualizarComponent);
    ref.componentInstance.pessoa = pessoa;
    ref.result.then((yes) => {
      console.log("OK");
    }, (cancel) => {
      console.log("Cancel Click");
    })
    // this.cadastroService.updatePessoa(1, pessoa).subscribe((response: Pessoa) => {
    //   this.pessoa = response;
    // });
  }

  deletarPessoa(codigo: number, pessoa: Pessoa){
    this.cadastroService.deletePessoa(codigo).subscribe((excluido: boolean) => {
     this.pessoaExcluida = excluido;
     var index = this.pessoas.indexOf(pessoa);
     this.pessoas.splice(index, 1);
    });
  }

  
}

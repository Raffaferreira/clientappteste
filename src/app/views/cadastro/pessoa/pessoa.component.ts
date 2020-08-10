import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Pessoa } from 'src/app/model/relatorios';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa = {} as Pessoa;
  pessoas: Pessoa[];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
  }

  adicionarPessoa(form: NgForm){
    if (this.pessoa.nome !== undefined) {
      this.cadastroService.cadastroPessoa(this.pessoa).subscribe((response: Pessoa) => {
        this.pessoas.push(response);
      });
    }
  }

}

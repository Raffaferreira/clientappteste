import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/relatorios';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CadastroService } from 'src/app/services/cadastro.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html'
})
export class AtualizarComponent implements OnInit{

  pessoas: Pessoa[];
  pessoa: Pessoa;
  constructor(public modal: NgbActiveModal,
    private cadastroService: CadastroService) { }
  
  ngOnInit(): void {
    console.log(this.pessoa);
  }

  atualizarPessoa(form: NgForm){
    if (this.pessoa.nome !== undefined) {
      this.cadastroService.updatePessoa(this.pessoa).subscribe((response: boolean) => {
        this.modal.close();
      });
    }
  }

}

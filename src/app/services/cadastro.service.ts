import { Injectable } from '@angular/core';
import { Pessoa } from '../model/relatorios';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { methods, endpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  cadastroPessoa(cadastro: Pessoa)
  {
    return this.httpClient.post<Pessoa>(`${methods.cadastrar}`, cadastro)
    .pipe(retry(2), catchError(this.handleError));
  }

  updatePessoa(updateCadastro: Pessoa)
  {
    return this.httpClient.put<boolean>(`${methods.editarpessoa}`, updateCadastro)
    .pipe(retry(2), catchError(this.handleError));
  }

  deletePessoa(codigo:number)
  {
    return this.httpClient.delete<boolean>(`${methods.deletarpessoa}/${codigo}`)
    .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

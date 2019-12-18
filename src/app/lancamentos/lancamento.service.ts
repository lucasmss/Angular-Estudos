import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface LancamentoFiltro{
descricao: string;

}

export interface LancamentoFiltro {
   descricao: string;
   dataVencimentoInicio: Date;
   dataVencimentoFim: Date;
}

@Injectable()
export class LancamentoService {

   lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
   const params = new HttpParams;
   const headers = new HttpHeaders();

   headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

   if(filtro.descricao) {
      params.set('descricao', filtro.descricao);
   }

   return this.http.get(`${this.lancamentoUrl}?resumo`, 
      {headers, params})
      .toPromise()
      .then(response => response.content);
  
  }

  
}



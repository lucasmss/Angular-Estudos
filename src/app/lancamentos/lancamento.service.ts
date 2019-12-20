import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlResolver } from '@angular/compiler';
import { URLSearchParams } from 'url';
import { Content } from '@angular/compiler/src/render3/r3_ast';



export interface LancamentoFiltro{
descricao: string;

}

export class LancamentoFiltro {
   descricao: string;
   dataVencimentoInicio: Date;
   dataVencimentoFim: Date;
   pagina = 0;
   itensPorPagina = 5;
}

@Injectable()
export class LancamentoService {

   lancamentoUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
   const params = new HttpParams;
   const headers = new HttpHeaders();

   params.set('page', filtro.pagina.toString());
   params.set('size', filtro.itensPorPagina.toString());

   headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

   if(filtro.descricao) {
      params.set('descricao', filtro.descricao.toString());
   }

   return this.http.get(`${this.lancamentoUrl}?resumo`, 
      {headers, params})
      .toPromise()
      .then(response => response.content);
  
  }

  excluir(codigo: number): Promise<void> {
     const headers = new HttpHeaders();
     headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
   
   return this.http.delete(`${this.lancamentoUrl}/${codigo}`, {headers})
   .toPromise()
   .then(() => null);

  }

  
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


export interface LancamentoFiltro{
descricao: string;

}

@Injectable()
export class LancamentoService {

   lancamentoUrl = 'http://localhost:8080/lancamentos'

  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic admin');

    if (filtro.descricao){
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.lancamentoUrl}?resumo`,
    {headers,  search: filtro})
    .toPromise()
    .then(respose => respose.jason().content)


  }

  
}



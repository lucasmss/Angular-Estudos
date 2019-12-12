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

  pesquisar(): Promise<any> {
    
   return this.http.get(this.lancamentoUrl)
      .toPromise()
      .then(Response => Response.json.content);
  
      
  }

  
}



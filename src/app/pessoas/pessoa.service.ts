import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable()
export class PessoaService {

  pessoaUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    const params = new HttpParams;
    const headers = new HttpHeaders();

headers.append('admin', 'admin');


return this.http.get(this.pessoaUrl)
.toPromise()
.then(Response => Response.content);

}


}
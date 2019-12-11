import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [

    {estado: 'DF', cidade: 'Ceilandia', nome: 'José Paz da cunha', status: 'Inativo'},
    {estado: 'DF', cidade: 'Gama', nome: 'Lucas Mateus Silva', status: 'Ativo'},
    {estado: 'DF', cidade: 'Gama', nome: 'Maria Eduarda Irineu', status: 'Ativo'},
    {estado: 'DF', cidade: 'Aguas Claras', nome: 'Paulo Augusto', status: 'Ativo'},
    {estado: 'DF', cidade: 'Guara', nome: 'Thales de Narcos', status: 'Inativo'},
    {estado: 'DF', cidade: 'Sobradinho', nome: 'José Augusto', status: 'Inativo'},

  ];
}

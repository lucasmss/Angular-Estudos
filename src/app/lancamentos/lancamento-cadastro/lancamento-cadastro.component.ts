import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
tipos =[
  {label: 'Receita', value: 'RECEITA'},
  {label: 'Despesa', value: 'DESPESA'},
];

categorias =[
  {label: 'Alimentação', value: '1'},
  {label: 'Trasporte', value: '2'},
];

pessoas =[
  {label: 'Lucas Mateus Silva', value: '1'},
  {label: 'João Souza Pera', value: '2'},
  {label: 'Jane Perera', value: '3'},
];

  constructor() { }

  ngOnInit() {
  }

}

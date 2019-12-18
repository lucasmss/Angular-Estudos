import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';

import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';

import { NavbarComponent } from './navbar/navbar.component';

import {InputTextareaModule} from 'primeng/inputtextarea';

import {InputMaskModule} from 'primeng/inputmask';

import {CalendarModule} from 'primeng/calendar';

import {SelectButtonModule} from 'primeng/selectbutton';

import {MultiSelectModule} from 'primeng/multiselect';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';

import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';

import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';

import { LancamentoService } from './lancamentos/lancamento.service';
import { PessoaService } from './pessoas/pessoa.service';


@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    InputTextareaModule,
    TooltipModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    MultiSelectModule,
    CurrencyMaskModule,
    InputMaskModule,
    HttpClientModule
  ],
  providers: [LancamentoService,PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

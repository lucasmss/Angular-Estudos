import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEstudo-ui';
  
  private _lancamentos = [
    { brand: 'Apple', lastYearSale: '51%' },
    { brand: 'Samsung', lastYearSale: '83%' }
  ];
  public get lancamentos() {
    return this._lancamentos;
  }
  public set lancamentos(value) {
    this._lancamentos = value;
  }
}

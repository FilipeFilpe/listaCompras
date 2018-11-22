import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ComprasComponent } from './compra-single/compras.component';
import { ComprasService } from './compra-single/compras.service';
import { FormatCurrencyPipe } from '../format-currency.pipe';
import { AlertasComprasDirective } from '../alertas-compras.directive';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ComprasComponent
  ],
  providers: [
    ComprasService
  ],
  declarations: [
    ComprasComponent,
    FormatCurrencyPipe,
    AlertasComprasDirective
  ]
})
export class CompraModule { }

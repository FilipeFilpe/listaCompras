import { HttpClientModule } from '@angular/common/http';
import { ComprasService } from './compras/compras.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComprasComponent } from './compras/compras.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { AlertasComprasDirective } from './alertas-compras.directive';


@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    FormatCurrencyPipe,
    AlertasComprasDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

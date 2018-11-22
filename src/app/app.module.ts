import { CompraModule } from './compras/compra.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { AlertasComprasDirective } from './alertas-compras.directive';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

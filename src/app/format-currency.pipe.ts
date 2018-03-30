import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {
  
// Metódo com a lógica para transformar o número digitado para o formato do Brasil ('pt-BR')
  transform(value: any, locale = 'pt-BR'): any {
    // Dentro dos colcheites de style, tem a adição do R$ do Brasil ('BRL')
    return new Intl.NumberFormat(locale, {style: 'currency', currency: 'BRL'}).format(value);
  }

}

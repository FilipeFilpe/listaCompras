import { Directive, HostListener, Input } from '@angular/core';
import { Compra } from './compra';

@Directive({
  selector: '[alertasCompras]'
})
export class AlertasComprasDirective {
  private _alertasCompras: Compra;
  constructor() { }

  get alertasCompras() {
    return this._alertasCompras;
  }

  @Input()
  set alertasCompras(value:Compra) {
    this._alertasCompras = value;
  }

  @HostListener('click')
  onAdd() {
    alert(this.alertasCompras.produto + " adicionado com sucesso!")
  }
}
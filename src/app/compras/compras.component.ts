import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  title = "Lista de Compras";
  compras = [];
  totalItem = 0;
  total = 0;
  compra:Compra = {produto:"", preco: 0, quantidade: 0, promocao:"", totalItem: 0};

  add() {
    // Cria uma cópia do item PRODUTO para gravar no array
    let compra = Object.assign({}, this.compra);
    // Calcula o preço total da PRODUTO
    this.totalItem = compra.totalItem;
    compra.totalItem = compra.preco * compra.quantidade;
    // Calcula o preço total da COMPRA
    this.total += compra.totalItem;
    // Adiciona o PRODUTO na COMPRA
    this.compras.push(compra);
  }
}
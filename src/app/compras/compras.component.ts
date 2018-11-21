import { HttpClient } from '@angular/common/http';
import { Compra } from './../compra';
import { ComprasService } from './compras.service';
import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  title = "Lista de Compras";
  compras: Compra[];
  totalItem = 0;
  total = 0;
  data = new Date();
  compra:Compra = {id: 0, produto:"", preco: 0, quantidade: 0, promocao:"", totalItem: 0};

  constructor(private comprasService: ComprasService){}

  add() {
    // Cria uma cópia do item PRODUTO para gravar no array
    let compra = Object.assign({}, this.compra);
    this.compra = {id: 0, produto:"", preco: 0, quantidade: 0, promocao:"", totalItem: 0};
    // Calcula o preço total da PRODUTO
    this.totalItem = compra.totalItem;
    compra.totalItem = compra.preco * compra.quantidade;
    // Calcula o preço total da COMPRA
    this.total += compra.totalItem;
    // Adiciona o PRODUTO na COMPRA
    this.addCompra(compra);
    this.compras.push(compra);
    this.getCompras();
    // Puxa a data atual do local
    this.data.getTime();
  }

  addCompra(compra: Compra) {
    this.getCompras();
    return this.comprasService.setCompra(compra).subscribe(x => {console.log(x)});
  }
  getCompras() {
    return this.comprasService.getCompras()
                .subscribe(x => this.compras = x);
  }

  ngOnInit(){
    this.getCompras();
  }
  
  excluir(itemId){
    this.comprasService.deleteCompra(itemId)
      .subscribe(res => {
        this.getCompras();
      }, (err) => {
        console.log(err);
      }
    );
  }
}
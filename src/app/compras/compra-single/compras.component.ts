import { HttpClient } from '@angular/common/http';
import { Compra } from '../../compra';
import { ComprasService } from './compras.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    if (compra.id == 0) {
      this.addCompra(compra);
    } else (compra.id != 0); {
      this.alterar(compra.id, compra);
    }
    this.getCompras();
    // Puxa a data atual do local
    this.data.getTime();
  }
  limpar() {
    this.compra = {id: 0, produto:"", preco: 0, quantidade: 0, promocao:"", totalItem: 0};
  }
  addCompra(compra: Compra) {
    this.getCompras();
    return this.comprasService.setCompra(compra).subscribe(x => {this.getCompras();});
  }
  getCompras() {
    this.total = 0;
    return this.comprasService.getCompras()
                .subscribe(x => {this.compras = x; x.forEach(y => this.total += y.totalItem) });
  }
  getCompra(itemId) {
    return this.comprasService.getCompra(itemId)
                .subscribe(x => this.compra = x);
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
  alterar(itemId, compra: Compra) {
    this.comprasService.updateCompra(itemId, compra)
          .subscribe(res => {
            this.getCompras();
          }, (err) => {
            console.log(err);
          });
  }
  preencherForm(itemId) {
    return this.getCompra(itemId);
  }
  pesquisar(nome: string){
    let compras = [];
    this.compras.forEach(x => {
      let result = x.produto.toLowerCase().indexOf(nome.toLowerCase()) > -1 ? compras.push(x) : false;
      console.log(compras);
      if (result != false) {
        this.compras = [];
        this.compras = compras;
      }
    });
  }
  pesquisaLimpa() {
    this.getCompras;
  }
}
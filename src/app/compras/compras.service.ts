import { Compra } from './../compra';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComprasService {
  url = "http://localhost:3000/compras";

  constructor(private http: HttpClient) { }

  getCompras() {
    return this.http.get<Compra[]>(this.url);
  }
  setCompra(compra: Compra){
    return this.http.post<Compra>(this.url, compra);
  }
  deleteCompra(itemId) {
    return this.http.delete(this.url +'/'+ itemId);
  }
  updateCompra(itemId, compra: Compra) {
    return this.http.put(this.url +'/'+ itemId, compra);
  }
}
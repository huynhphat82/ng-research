import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/schemas';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  shipping: any = {};

  constructor(
    private http: HttpClient
  ) {}

  add(product: any) {
    this.items.push(product);
  }

  getAll() {
    return this.items;
  }

  clear() {
    this.items = [];
  }

  getShippingList() {
    return this.http.get('../../assets/shipping.json');
  }

  setShipping(shipping: any) {
    this.shipping = shipping;
  }

  getShipping() {
    return this.shipping;
  }
}

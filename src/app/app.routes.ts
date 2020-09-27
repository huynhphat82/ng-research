import { Injectable } from "@angular/core";

@Injectable()
export class RN { // RouteName
  HOME = '';
  PRODUCT_ROOT = 'products';
  PRODUCT_LIST = `${this.PRODUCT_ROOT}`;
  PRODUCT_DETAIL = `${this.PRODUCT_ROOT}/:id`;
  CART_LIST = 'carts';
  SHIPPING_LIST = 'shipping';
}

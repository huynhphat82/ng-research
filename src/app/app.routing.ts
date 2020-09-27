import { RouterModule } from '@angular/router';

import { RN } from './app.routes';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';

const _ = (path: string, component: object, ...rest: any) => (
  [].slice.call(rest).reduce((carry: object, item: object) => {
    typeof item === 'object' && (carry = {...carry, ...item });
    return carry;
  }, {path, component})
);

const R = new RN;

export const routing = RouterModule.forRoot([
  {
    path: R.HOME, component: ProductListComponent,
  },
  _(R.PRODUCT_DETAIL, ProductDetailComponent),
  _(R.CART_LIST, CartComponent),
  _(R.SHIPPING_LIST, ShippingComponent),
]);

export const listAppComponents = [
  ProductListComponent,
  ProductDetailComponent,
  CartComponent,
  ShippingComponent,
];

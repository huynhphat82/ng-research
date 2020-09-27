import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RN } from 'src/app/app.routes';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingList: Observable<any>;

  constructor(
    private cartService: CartService,
    private router: Router,
    private R: RN,
  ) { }

  ngOnInit(): void {
    this.shippingList = this.cartService.getShippingList();
  }

  selectShipping(shipping: any) {
    this.cartService.setShipping(shipping);
    this.router.navigate([this.R.CART_LIST]);
  }

}

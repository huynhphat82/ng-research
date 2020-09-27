import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RN } from 'src/app/app.routes';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: any[] = [];
  shippingFee: number = 0;
  subtotal: number = 0;
  total: number = 0;
  form: FormGroup;

  constructor(
    private cartService: CartService,
    public R: RN,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getAll();
    this.shippingFee = this.getShippingFee();
    this.subtotal = this.getSubTotal();
    this.total = this.subtotal + this.shippingFee;
  }

  getShippingFee() {
    let shipping = this.cartService.getShipping();
    return +(shipping?.price || 0);
  }

  getSubTotal() {
    return this.items.reduce((carry, item) => {
      carry += +item.price;
      return carry;
    }, 0);
  }

  onSubmit(data: any) {
    console.log('data => ', data)
    // reset cart, form
    this.cartService.clear();
    this.items = [];
    this.form.reset();

    alert('Your order has been submitted!')
  }

}

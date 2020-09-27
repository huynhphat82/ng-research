import { Component, OnInit } from '@angular/core';
import { RN } from '../../../app.routes';
import { Pipe, pipe } from './../../../services/common/Pipe';
import { Rules } from 'src/app/services/common/Rules';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  Pipe = Pipe;
  pipe = pipe;
  Rules = Rules;

  constructor(public R: RN) { }

  ngOnInit(): void {
    this.products.push(
      {
        name: 'Phone XL',
        description: 'A large phone with noe of the best screens',
        price: 1000,
      },
      {
        name: 'Phone Mini',
        description: 'A great phone with noe of the best cameras',
        price: 800,
      },
      {
        name: 'Phone Standard',
        description: '',
        price: 600,
      },
    );
  }

  share() {
    alert('The product has been shared!')
  }

  onNotify() {
    alert('You will be notified when the product goes on sale.')
  }

}

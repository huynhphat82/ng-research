import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  // define a prop for component (get data from parent component)
  @Input() product: any;
  // define an event for dispatching to parent component (send data to parent component)
  @Output() notify = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    this.notify.emit();
  }

}

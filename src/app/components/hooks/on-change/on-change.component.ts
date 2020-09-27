import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnInit, OnChanges {

  logs: any[] = [];

  constructor() { }

  @Input() hero: any;
  @Input() power: string;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    for (const prop in changes) {
      const change = changes[prop];
      const cur  = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      this.logs.push(`${prop}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

}

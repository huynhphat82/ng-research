import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RN } from 'src/app/app.routes';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public R: RN, private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate([this.R.HOME]);
  }

}

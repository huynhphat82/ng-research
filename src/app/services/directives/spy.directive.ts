import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(
    private logService: LogService,
  ) { }

  ngOnInit(): void {
    this.logService.info('Spy => onInit')
  }

  ngOnDestroy(): void {
    this.logService.info('Spy => onDestroy')
  }

}

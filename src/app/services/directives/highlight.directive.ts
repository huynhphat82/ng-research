import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    // target element (DOM element) will injected here
    private el: ElementRef,
  ) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // define props for the target element
  @Input() defaultColor: string;
  @Input('myHightlight') highlightColor: string;

  // Listen MOUSEENTER event of the target element
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  // Listen MOUSELEAVE event of the target element
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
}

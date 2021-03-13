import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appItemHighlight]'
})
export class ItemHighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'mediumslateblue';
   }

  @HostListener('mouseclick')
  onMouseClickEvent() {
  }
}

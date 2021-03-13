import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotatImage]'
})
export class RotatImageDirective {
  @Input('appRotatImage')
  appRotatImage: string = "0";
  @Input()
  step: string = "0";

  private rotateOccurences: number = 0;
  private defaultStepSize: number = 10;
  private rotateDeg: number = 0;

  constructor(private element: ElementRef) {
  }

  @HostListener('mousedown', [`$event`])
  onMouseDownEvent(event: MouseEvent) {
    const orientation = event.shiftKey ? -1 : 1;

    if (this.element.nativeElement.tagName === "IMG") {
      this.rotateOccurences++;
      if (this.rotateOccurences === 1) {
        if (this.appRotatImage) {
          this.rotateDeg = parseInt(this.appRotatImage) * orientation;
        } else {
          this.rotateDeg = ((this.step === "0") ? this.defaultStepSize : parseInt(this.step)) * orientation;
        }
      } else {
        this.rotateDeg = this.rotateDeg + (((this.step === "0") ? this.defaultStepSize : parseInt(this.step)) * orientation);
      };
      this.element.nativeElement.style.transform = `rotate(${this.rotateDeg % 360}deg)`;
    }
  }

}

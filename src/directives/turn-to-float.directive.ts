import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTurnToFloat]',
  standalone: true
})
export class TurnToFloatDirective {

  constructor(
    private el: ElementRef<HTMLInputElement>,
  ) { }

  @HostListener('input') onInput() {
    let inputValue = "";
    let { value } = this.el.nativeElement;
    const normalValue = value.replace(/\D/gi, '');
    if (normalValue.length > 0) {
      const parsedNumber = parseFloat(normalValue) / 100;
      if (!isNaN(parsedNumber)) {
        inputValue = parsedNumber.toLocaleString("es-ES", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          useGrouping: true,
        });
      }
    }
    this.el.nativeElement.value = inputValue;
  }
}

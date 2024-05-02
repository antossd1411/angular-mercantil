import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

type AmountInputErrors = {
  required?: string;
  min?: string;
}

export function amountFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let errors: AmountInputErrors = {
      required: "",
      min: "",
    };

    if (!control.value) {
      errors.required = "Value required";
    }

    const normalValue = control.value.replace(/\D/gi, '');

    if ((parseFloat(normalValue) / 100) < 1) {
      errors.min = "Value must be greater than or equal to 1";
    }

    const hasError = errors.required || errors.min;

    return hasError ? errors : null;
  }
}

@Directive({
  selector: '[appAmountInput]',
  standalone: true
})
export class AmountInputDirective implements Validator {
  @Input('appAmountInput') amountValue = '';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.amountValue ? amountFormatValidator() : null;
  }
}

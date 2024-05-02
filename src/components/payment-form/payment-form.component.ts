import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { PaymentsService } from '../../services/payments/payments.service';
import { Payments } from '../../types/payments/payments';
import { catchError, forkJoin, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TurnToFloatDirective } from '../../directives/turn-to-float.directive';
import { JsonPipe } from '@angular/common';
import { amountFormatValidator, AmountInputDirective } from '../../directives/validators/amount-input.directive';
import { BanksService } from '../../services/banks/banks.service';
import { Banks } from '../../types/banks/banks';
import { AlertComponent } from '../alert/alert.component';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [ReactiveFormsModule, TurnToFloatDirective, JsonPipe, AlertComponent],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css',
})
export class PaymentFormComponent implements OnInit {
  banks: Banks[] = [];

  constructor(
    private paymentsService: PaymentsService,
    private banksService: BanksService,
    private alertsService: AlertsService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    forkJoin([this.banksService.getBanks()])
    .pipe()
    .subscribe(([banks]) => {
      this.banks = banks;
    });
  }

  paymentForm = this.formBuilder.nonNullable.group({
    amount: ['', amountFormatValidator()],
    bankCode: ["0", [Validators.required, Validators.min(1)]],
    destinationPhone: ['', [Validators.required, Validators.maxLength(11), Validators.pattern(/[0-9]{1,11}/)]],
    dni: ['', [Validators.required, Validators.maxLength(11)]],
    paymentReference: ['', [Validators.required, Validators.maxLength(11)]],
    invoiceNumber: ['', [Validators.required, Validators.maxLength(11)]],
  });

  get amount() {
    let inputValue = this.paymentForm.get('amount')!.value;
    inputValue = inputValue.replace(/\D/gi, '');
    const parsedNumber = parseFloat(inputValue);
    if (isNaN(parsedNumber)) {
      throw new Error("Amount format is invalid.");
    }
    return parsedNumber / 100;
  }

  handleSubmit() {
    try {
      const amount = this.amount;
      if (amount < 1) {
        throw new Error("Amount must be greater or equal to one.");
      }

      const payment = new Payments({...this.paymentForm.value, amount});

      this.paymentsService.postPayment(payment)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.alertsService.setAlert({variant: "error", message: error.error.message});
          return of(0);
        })
      )
      .subscribe((inserted: number) => {
        if (inserted > 0) {
          this.handleReset();
          this.alertsService.setAlert({message: "Pago exitoso."});
        }
      });
    } catch (err) {
      console.log("Error:", err)
    }
  }

  handleReset() {
    this.paymentForm.reset();
  }
}

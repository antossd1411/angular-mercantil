import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentFormComponent } from '../components/payment-form/payment-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaymentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

import { Injectable } from '@angular/core';
import { Payments } from '../../types/payments/payments';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  postPayment(payment: Payments) {
    return this.http.post<number>(`${this.apiUrl}/Payments`, payment, {});
  }
}

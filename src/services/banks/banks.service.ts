import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Banks } from '../../types/banks/banks';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getBanks() {
    return this.http.get<Banks[]>(`${this.apiUrl}/Banks`);
  }
}

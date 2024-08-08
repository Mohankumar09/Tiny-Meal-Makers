import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/menu`);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order`, order);
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orders`);
  }

  markAsDelivered(orderId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order/delivered`, { id: orderId });
  }
}

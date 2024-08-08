import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  orders: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrders().subscribe((data: any[]) => {
      this.orders = data;
    });
  }

  markAsDelivered(order: any): void {
    this.apiService.markAsDelivered(order.id).subscribe(response => {
      // Handle response
    });
  }
}

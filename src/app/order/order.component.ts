import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order: any = {};

  constructor(private apiService: ApiService) { }

  placeOrder(): void {
    this.apiService.placeOrder(this.order).subscribe(response => {
      // Handle response
    });
  }
}

import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
  standalone: false,
})
export class CustomerListComponent {
  constructor(private customerService: CustomerService) {
    console.log(this.customerService.getCustomers());
  }
}

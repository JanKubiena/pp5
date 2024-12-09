import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
  standalone: false,
})
export class CustomerListComponent {
  customerList: Customer[];

  constructor(private customerService: CustomerService) {
    console.log(this.customerService.getCustomers());
    this.customerList = this.customerService.getCustomers();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
  standalone: false,
})
export class CustomerListComponent implements OnDestroy, OnInit {
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    console.log(this.customerService.getCustomers());
    this.customerList = this.customerService.getCustomers();
  }

  ngOnDestroy(): void {
    console.log('zamykam komponent');
  }
  delateCustomer(event: Customer) {
    console.log('Usuwam klienta o nipe: ' + event.nip);
  }
}

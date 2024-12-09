import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-element',
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss',
  standalone: false,
})
export class CustomerListElementComponent {
  @Input()
  customer: Customer = new Customer();
}

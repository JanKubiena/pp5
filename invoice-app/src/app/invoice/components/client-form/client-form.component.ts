import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss',
  standalone: false,
})
export class ClientFormComponent {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  customer: Customer = new Customer();

  callOnSubmit(form: NgForm) {
    if (form.form.valid) {
      this.customerService.addCustomer(this.customer);
      console.log(this.customer);
      this.router.navigate(['invoice/customer-list']);
    } else {
      console.error('Form is invalid');
    }
  }
}

import { Component } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss',
  standalone: false,
})
export class ClientFormComponent {
  customer: Customer = new Customer();

  callOnSubmit() {
    console.log(this.customer);
  }
}

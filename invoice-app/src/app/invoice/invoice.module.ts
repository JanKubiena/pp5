import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerListElementComponent } from './components/customer-list-element/customer-list-element.component';

@NgModule({
  declarations: [
    ClientFormComponent,
    CustomerListComponent,
    CustomerListElementComponent,
  ],
  imports: [CommonModule, FormsModule, InvoiceRoutingModule],
})
export class InvoiceModule {}

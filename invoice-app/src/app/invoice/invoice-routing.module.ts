import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

const routes = [
  { path: 'client-form', component: ClientFormComponent },
  { path: 'customer-list', component: CustomerListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceRoutingModule {}

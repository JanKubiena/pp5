import { Routes } from '@angular/router';
import { ProductFormComponent } from './product/components/product-form/product-form.component';
import { ClientFormComponent } from './invoice/components/client-form/client-form.component';

export const routes: Routes = [
  { path: 'product-form', component: ProductFormComponent },
  { path: 'client-form', component: ClientFormComponent },
];

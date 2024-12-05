import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'invoice-app';
  name = 'Jan';
}

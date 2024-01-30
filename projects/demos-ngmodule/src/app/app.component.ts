import { Component } from '@angular/core';
import { MySelectCustomEvent } from '@my-components/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  prenom = 'Romain';
  items = ['Romain', 'Sylvian'];

  handleValueChange(event: MySelectCustomEvent<string>) {
    this.prenom = event.detail;
  }
}

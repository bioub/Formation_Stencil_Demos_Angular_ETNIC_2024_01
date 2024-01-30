import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent, MySelect, MySelectCustomEvent } from '@my-components/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MySelect, MyComponent],
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

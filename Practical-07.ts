import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <h2>Two Way Data Binding</h2>
    <label>Enter your name:</label>
    <input [(ngModel)]="name" placeholder="Type your name">
    <p>Hello, {{ name }}!</p>
  `
})
export class AppComponent {
  name = '';
}

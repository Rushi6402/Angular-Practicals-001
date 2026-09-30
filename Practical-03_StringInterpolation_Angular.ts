import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>String Interpolation</h2>
    <p>{{ message }}</p>
    <p>Student: {{ studentName }}</p>
  `
})
export class AppComponent {
  message = 'Welcome to Angular Programming!';
  studentName = 'Student Name';
}

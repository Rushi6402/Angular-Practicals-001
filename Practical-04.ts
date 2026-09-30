import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>List of 10 Students</h2>
    <ol>
      <li *ngFor="let student of students">{{ student }}</li>
    </ol>
  `
})
export class AppComponent {
  students = [
    'Aarav', 'Aditya', 'Ananya', 'Diya', 'Ishaan',
    'Kavya', 'Neha', 'Rahul', 'Riya', 'Vikram'
  ];
}

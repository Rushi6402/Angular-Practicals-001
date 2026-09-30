import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h2>Route Parameters Demo</h2>
    <p>Student ID: {{ studentId }}</p>
  `
})
export class AppComponent {
  studentId = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
    });
  }
}

/*
Example route configuration:
{ path: 'student/:id', component: AppComponent }

Example URL:
http://localhost:4200/student/101
*/

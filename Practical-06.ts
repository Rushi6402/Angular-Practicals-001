import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Student Portfolio</h2>
    <div>
      <h3>{{ student.name }}</h3>
      <p><b>Course:</b> {{ student.course }}</p>
      <p><b>Email:</b> {{ student.email }}</p>
      <p><b>Skills:</b> {{ student.skills.join(', ') }}</p>
      <p><b>About:</b> {{ student.about }}</p>
    </div>
  `
})
export class AppComponent {
  student = {
    name: 'Student Name',
    course: 'M.Sc. Computer Science',
    email: 'student@example.com',
    skills: ['Angular', 'React', 'JavaScript'],
    about: 'I am a computer science student interested in web development.'
  };
}

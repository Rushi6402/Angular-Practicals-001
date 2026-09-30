import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Timetable - One Way Data Binding</h2>
    <table border="1" cellpadding="8">
      <tr>
        <th>{{ day1 }}</th>
        <th>{{ day2 }}</th>
        <th>{{ day3 }}</th>
      </tr>
      <tr>
        <td>{{ subject1 }}</td>
        <td>{{ subject2 }}</td>
        <td>{{ subject3 }}</td>
      </tr>
    </table>
  `
})
export class AppComponent {
  day1 = 'Monday';
  day2 = 'Tuesday';
  day3 = 'Wednesday';

  subject1 = 'Angular';
  subject2 = 'React';
  subject3 = 'Cloud Computing';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Class Timetable</h2>
    <table border="1" cellpadding="8">
      <tr><th>Day</th><th>9-10</th><th>10-11</th><th>11-12</th></tr>
      <tr *ngFor="let row of timetable">
        <td>{{ row.day }}</td>
        <td>{{ row.first }}</td>
        <td>{{ row.second }}</td>
        <td>{{ row.third }}</td>
      </tr>
    </table>
  `
})
export class AppComponent {
  timetable = [
    {day: 'Monday', first: 'Angular', second: 'DBMS', third: 'Python'},
    {day: 'Tuesday', first: 'React', second: 'Java', third: 'Cloud'},
    {day: 'Wednesday', first: 'DBMS', second: 'Angular', third: 'Python'},
    {day: 'Thursday', first: 'React', second: 'Cloud', third: 'Java'},
    {day: 'Friday', first: 'Python', second: 'Angular', third: 'React'}
  ];
}

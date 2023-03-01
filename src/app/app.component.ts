import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activities = [
    {
      title: 'Activity 1',
      date: '2029-01-01',
      location: 'New York',
      price: 100,
    },
    {
      title: 'Activity 2',
      date: '2029-01-02',
      location: 'London',
      price: 200,
    },
  ];
}

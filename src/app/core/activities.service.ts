import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  // activities = [
  //   {
  //     title: 'Music',
  //     date: '2029-01-01',
  //     location: 'New York',
  //     price: 100,
  //   },
  //   {
  //     title: 'Excursion',
  //     date: '2029-01-02',
  //     location: 'London',
  //     price: 200,
  //   },
  // ];

  constructor(private http: HttpClient) {}

  getActivities() {
    return this.http.get<any[]>('http://localhost:3000/activities');
  }

  // getByTitle(title: string) {
  //   return this.activities.find((a) => a.title === title);
  // }
}

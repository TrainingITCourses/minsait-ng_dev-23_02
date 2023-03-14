import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from './models/activity.type';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  apiEndpoint = environment.apiUrl + '/activities';
  constructor(private http: HttpClient) {}

  getActivities$(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiEndpoint);
  }
  postActivity$(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.apiEndpoint, activity);
  }
  deleteActivity$(id: string): Observable<Activity> {
    return this.http.delete<Activity>(`${this.apiEndpoint}/${id}`);
  }
  putActivity$(activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(
      `${this.apiEndpoint}/${activity.id}`,
      activity
    );
  }
}

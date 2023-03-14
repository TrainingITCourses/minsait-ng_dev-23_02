import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../core/models/activity.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activities: Activity[] = [];

  constructor(activitiesService: ActivitiesService) {
    activitiesService.getActivities$().subscribe((data) => {
      this.activities = data;
    });
  }
}

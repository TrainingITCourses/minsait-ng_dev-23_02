import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activities: any[] = [];

  constructor(activitiesService: ActivitiesService) {
    activitiesService.getActivities().subscribe((data) => {
      this.activities = data;
    });
  }
}

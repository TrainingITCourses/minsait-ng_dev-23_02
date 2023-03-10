import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  activities: any[] = [];
  error: any = null;
  constructor(activitiesService: ActivitiesService) {
    activitiesService.getActivities().subscribe({
      next: (data) => (this.activities = data),
      error: (error) => (this.error = error),
    });
  }
}

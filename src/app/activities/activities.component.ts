import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';
import { Activity } from '../core/models/activity.type';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  activities: Activity[] = [];
  error: any = null;

  constructor(activitiesService: ActivitiesService) {
    activitiesService.getActivities$().subscribe({
      next: (data) => (this.activities = data),
      error: (error) => (this.error = error),
      complete: () => console.log('done'),
    });

    // RxJs 5.x
    // activitiesService.getActivities().subscribe(
    //   (data) => (this.activities = data),
    //   (error) => (this.error = error),
    //   () => console.log('done')
    // );
  }
}

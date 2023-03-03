import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from '../core/activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent {
  activity: any = {};

  constructor(activitiesService: ActivitiesService, route: ActivatedRoute) {
    const title = route.snapshot.paramMap.get('title') || '';
    this.activity = activitiesService.getByTitle(title);
  }
}

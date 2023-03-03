import { Component } from '@angular/core';
import { ActivitiesService } from '../core/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  activities: any[] = this.activitiesService.activities;

  constructor(private activitiesService: ActivitiesService) {}
}

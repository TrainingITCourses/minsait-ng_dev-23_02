import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ActivitiesService } from '../core/activities.service';
import { CurrencyService } from '../core/currency.service';
import { Activity } from '../core/models/activity.type';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent {
  activity: Activity | undefined;

  constructor(
    activitiesService: ActivitiesService,
    route: ActivatedRoute,
    currencyService: CurrencyService
  ) {
    const title = route.snapshot.paramMap.get('title') || '';

    activitiesService
      .getActivities$()
      .pipe(
        map((activities) => {
          return activities.find((a) => a.title === title);
        })
      )
      .subscribe((activity) => {
        this.activity = activity;
      });

    // this.activity = activitiesService.getByTitle(title);
    // this.activity.priceEUR = currencyService.convert(this.activity.price);
  }
}

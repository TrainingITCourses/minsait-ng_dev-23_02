import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';

@NgModule({
  declarations: [ActivityComponent],
  imports: [CommonModule, ActivityRoutingModule],
})
export class ActivityModule {}

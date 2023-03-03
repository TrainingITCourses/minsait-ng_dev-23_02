import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkComponent } from './link/link.component';
import { ActivityItemComponent } from './activity-item/activity-item.component';

@NgModule({
  declarations: [LinkComponent, ActivityItemComponent],
  imports: [CommonModule],
  exports: [LinkComponent, ActivityItemComponent],
})
export class SharedModule {}

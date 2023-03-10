import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [LinkComponent, ActivityItemComponent, FormErrorComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    LinkComponent,
    ActivityItemComponent,
    ReactiveFormsModule,
    RouterModule,
    FormErrorComponent,
  ],
})
export class SharedModule {}

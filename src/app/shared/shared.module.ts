import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivityItemComponent } from './activity-item/activity-item.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [LinkComponent, ActivityItemComponent, FormErrorComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    LinkComponent,
    ActivityItemComponent,
    ReactiveFormsModule,
    RouterModule,
    FormErrorComponent,
    HttpClientModule,
  ],
})
export class SharedModule {}

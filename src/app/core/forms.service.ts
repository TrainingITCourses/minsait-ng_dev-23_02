import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  hasErrorMessage(form: FormGroup, formControlName: string): boolean {
    const control = form.controls[formControlName];
    return control.invalid && (control.touched || control.dirty);
  }

  getErrorMessage(form: FormGroup, formControlName: string): string {
    const control = form.controls[formControlName];
    return '❗ ' + JSON.stringify(control.errors);
  }
}

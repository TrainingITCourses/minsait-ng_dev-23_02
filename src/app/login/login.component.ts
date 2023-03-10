import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../core/forms.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  pageTitle = 'Login page';

  loginForm: FormGroup;

  constructor(fb: FormBuilder, private fs: FormsService) {
    this.loginForm = fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(4)],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
      ],
    });
  }

  onRegister() {
    console.log('sending data to server', this.loginForm.value);
  }

  hasErrorMessage(formControlName: string): boolean {
    return this.fs.hasErrorMessage(this.loginForm, formControlName);
  }

  getErrorMessage(formControlName: string): string {
    return this.fs.getErrorMessage(this.loginForm, formControlName);
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from '../core/form.class';
import { FormsService } from '../core/forms.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends FormBase {
  pageTitle = 'Login page';

  constructor(fb: FormBuilder, fs: FormsService) {
    super();
    super.fs = fs;
    super.form = fb.group({
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
    console.log('sending data to server', this.form.value);
  }
}

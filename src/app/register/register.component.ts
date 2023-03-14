import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormBase } from '../core/form.class';
import { FormsService } from '../core/forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends FormBase {
  pageTitle = 'Register page';

  constructor(fb: FormBuilder, fs: FormsService, private http: HttpClient) {
    super();
    super.fs = fs;
    super.form = fb.group({
      fullName: new FormControl('Elon', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: [
        'elon@tesla.com',
        [Validators.required, Validators.email, Validators.minLength(4)],
      ],
      password: [
        '1234',
        [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
      ],
      repeatedPassword: [
        '1234',
        [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
      ],
      acceptedTerms: [true, Validators.requiredTrue],
    });
  }

  onRegister() {
    const password = this.form.controls['password'].value;
    const repeatedPassword = this.form.controls['repeatedPassword'].value;
    if (password !== repeatedPassword) {
      this.form.controls['repeatedPassword'].setErrors({
        samePassword: 'Passwords do not match',
      });
    } else {
      console.log('😅 sending data to server', this.form.value);
      this.http
        .post<any>('http://localhost:3000/users', this.form.value)
        .subscribe({
          next: (data) => console.log('🏖️ received data from server', data),
          error: (err) => console.log('🏖️ error', err),
        });
      console.log('🏖️ sent data to server', this.form.value);
    }
  }
}

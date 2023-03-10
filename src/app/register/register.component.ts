import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsService } from '../core/forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  pageTitle = 'Register page';

  registerForm: FormGroup = this.fb.group({
    fullName: new FormControl('Elon', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: [
      'elon@tesla.com',
      [Validators.required, Validators.email, Validators.minLength(4)],
    ],
    password: [
      '123456',
      [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
    ],
    repeatedPassword: [
      '1234',
      [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
    ],
    acceptedTerms: [true, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder, private fs: FormsService) {}

  onRegister() {
    const password = this.registerForm.controls['password'].value;
    const repeatedPassword =
      this.registerForm.controls['repeatedPassword'].value;
    if (password !== repeatedPassword) {
      this.registerForm.controls['repeatedPassword'].setErrors({
        samePassword: 'Passwords do not match',
      });
    } else {
      console.log('sending data to server', this.registerForm.value);
    }
  }

  hasErrorMessage(formControlName: string): boolean {
    return this.fs.hasErrorMessage(this.registerForm, formControlName);
  }

  getErrorMessage(formControlName: string): string {
    return this.fs.getErrorMessage(this.registerForm, formControlName);
  }
}

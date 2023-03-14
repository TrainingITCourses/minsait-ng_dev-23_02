import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormBase } from 'src/app/core/form.class';
import { FormsService } from 'src/app/core/forms.service';
import { User } from 'src/app/core/models/user.type';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent extends FormBase {
  @Output() register = new EventEmitter<User>();

  constructor(fb: FormBuilder, fs: FormsService) {
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

  onClick() {
    const password = this.form.controls['password'].value;
    const repeatedPassword = this.form.controls['repeatedPassword'].value;
    if (password !== repeatedPassword) {
      this.form.controls['repeatedPassword'].setErrors({
        samePassword: 'Passwords do not match',
      });
    } else {
      console.log('👶🏼 child emitting change', this.form.value);
      this.register.emit(this.form.value);
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBase } from 'src/app/core/form.class';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent extends FormBase {
  @Output() login = new EventEmitter<any>();

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

  onClick() {
    console.log('👶🏼 child emitting change', this.form.value);
    this.login.emit(this.form.value);
  }
}

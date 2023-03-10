import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  pageTitle = 'Login page';

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: '',
      password: '1234',
    });
  }

  onRegister() {
    console.log('sending data to server', this.loginForm.value);
  }
}

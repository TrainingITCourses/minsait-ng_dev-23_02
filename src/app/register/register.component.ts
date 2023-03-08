import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  pageTitle = 'Register page';

  formGroup: FormGroup = this.formBuilder.group({
    fullName: '',
    email: '',
    password: '1234',
    repeatedPassword: '1234',
  });

  constructor(private formBuilder: FormBuilder) {}

  onRegister() {
    console.log('sending data to server', this.formGroup.value);
  }
}

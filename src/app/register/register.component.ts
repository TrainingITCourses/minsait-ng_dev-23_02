import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../core/models/user.type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  pageTitle = 'Register page';
  serverUser: any;

  constructor(private http: HttpClient) {}

  onRegister(newUser: User) {
    console.log('😅 sending data to server', newUser);
    this.http.post<any>('http://localhost:3000/users', newUser).subscribe({
      next: (data) => {
        console.log('🏖️ received data from server', data);
        this.serverUser = data;
      },
      error: (err) => console.log('🏖️ error', err),
    });
    console.log('🏖️ sent data to server', newUser);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  pageTitle = 'Login page';
  serverUser: any;
  constructor(private http: HttpClient) {}
  onLogin(credentials: any) {
    console.log('sending data to server', credentials);
    this.http.post<any>('http://localhost:3000/login/', credentials).subscribe({
      next: (data) => {
        console.log('received data from server', data);
        this.serverUser = data;
      },
      error: (err) => console.log('error', err),
    });
  }
}

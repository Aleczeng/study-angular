import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  isAuthenticated;

  login(username: string, password: string) {
    this.isAuthenticated = username === 'alec' && password === '123';
    console.log(this.isAuthenticated);
  }
}

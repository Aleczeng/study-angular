import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {

  login(username: string, password: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log('login: username:', username, ',password:', password);
  }

  isAuthenticated() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    console.log('isAuthenticated: username:', username, ',password:', password);
    console.log(this.isAuthenticated);
    return username === 'alec' && password === '123';
  }
}

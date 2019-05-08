import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  @Output() isLogin: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  login(username: string, password: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log('login: username:', username, ',password:', password);
    this.isLogin.emit(true);
  }

  logout() {
    localStorage.setItem('username', '');
    localStorage.setItem('password', '');
    this.isLogin.emit(false);
  }

  isAuthenticated() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    console.log('isAuthenticated: username:', username, ',password:', password);
    return username === 'alec' && password === '123';
  }


}

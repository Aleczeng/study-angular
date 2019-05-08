import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm;

  constructor(public formBuilder: FormBuilder,
              public authService: AuthService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return <FormControl>this.loginForm.get('username');
  }

  get password() {
    return <FormControl>this.loginForm.get('password');
  }

  onSubmit() {
    console.log('username:', this.username.value, ',password:', this.password.value);
    this.authService.login(this.username.value, this.password.value);
  }
}

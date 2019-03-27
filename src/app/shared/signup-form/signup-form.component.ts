import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './sighup-form.component.html',
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5)
    ]),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }
}

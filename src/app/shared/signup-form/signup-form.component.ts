import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorsPattern} from '../../common/validators/validators.pattern';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
        ValidatorsPattern.cannotContainSpace
      ], ValidatorsPattern.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    this.form.setErrors({formInvalid: true});
  }

  logType(x) {
    console.log(x);
  }
}

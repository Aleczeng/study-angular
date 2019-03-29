import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorsPattern} from '../../common/validators/validators.pattern';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['signup-form.component.css']
})
export class SignupFormComponent {
  addressForm;
  form;

  constructor(fb: FormBuilder) {
    this.addressForm = fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });


    this.form = new FormGroup({
      account: new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(5),
          ValidatorsPattern.cannotContainSpace
        ], ValidatorsPattern.shouldBeUnique),
        oldPassword: new FormControl('', Validators.required, ValidatorsPattern.checkOldPassword),
        newPassword: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      }, {validators: ValidatorsPattern.checkConfirmPassword}),
      topics: new FormArray([])
    });
  }


  get account() {
    return this.form.get('account');
  }

  get username() {
    return this.form.get('account.username');
  }

  get topics() {

    // only FormArray has controls
    return <FormArray>this.form.get('topics');
  }

  get city() {
    return <FormControl>this.addressForm.get('city');
  }

  get country() {
    return <FormControl>this.addressForm.get('country');
  }

  login() {
    this.form.setErrors({formInvalid: true});
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
  }

  onDelete(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}

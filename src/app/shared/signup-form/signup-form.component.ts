import {Component} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorsPattern} from '../../common/validators/validators.pattern';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['signup-form.component.css']
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
    }),

    topics: new FormArray([])
  });

  get username() {
    return this.form.get('username');
  }

  get topics() {
    return <FormArray>this.form.get('topics');
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

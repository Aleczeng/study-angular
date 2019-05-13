import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [{id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}];
  editorForm: FormGroup;

  constructor() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    });
    console.log(this.contactMethods);
  }

  log(x) {
    console.log(x);
  }

  onSubmit() {
    console.log(this.editorForm.get('editor').value);
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [{id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}];

  constructor() {
    console.log(this.contactMethods);
  }

  log(x) {
    console.log(x);
  }
}

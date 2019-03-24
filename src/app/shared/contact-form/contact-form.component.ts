import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['contact-form.component.css']
})
export class ContactFormComponent {
  @Input('favStatus') onClick: boolean;
  @Output() onFavChange = new EventEmitter();
  emitValue: any;

  constructor() {
  }

  onChange() {
    this.onClick = !this.onClick;
    this.onFavChange.emit(this.emitValue);
  }

  log(x) {
    console.log(x);
  }
}

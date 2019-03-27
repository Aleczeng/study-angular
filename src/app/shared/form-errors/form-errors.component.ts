import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['form-errors.component.css']
})
export class FormErrorsComponent {
  @Input() validationName: FormControl;
}

import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['form-errors.component.css']
})
export class FormErrorsComponent {
  @Input() validationName: AbstractControl;
}

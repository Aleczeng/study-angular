import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
})
export class FormErrorsComponent {
  @Input() validationName: AbstractControl;
}

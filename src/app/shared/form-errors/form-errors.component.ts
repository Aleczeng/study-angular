import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'form-errors',
  templateUrl: './form-errors.component.html',
})
export class FormErrorsComponent {
  @Input('formControlName') formControlName: FormControl;
}

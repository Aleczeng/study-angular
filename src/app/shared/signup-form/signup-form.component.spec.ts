import {SignupFormComponent} from './signup-form.component';
import {FormBuilder} from '@angular/forms';

describe('ReuseComponent', () => {
  let component: SignupFormComponent;

  beforeEach(() => {
    component = new SignupFormComponent(new FormBuilder());
  });

  afterEach(() => {
  });

  beforeAll(() => {

  });

  it('should have username', () => {
    expect(component.form.get('account').contains('username')).toBeTruthy();
  });

  it('should make username control required', () => {
    const control = component.form.get('account.username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});

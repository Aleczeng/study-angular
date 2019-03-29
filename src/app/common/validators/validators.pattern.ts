import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';

export class ValidatorsPattern {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
    }
    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'alec') {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({
            oldPasswordError: true
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  static checkConfirmPassword(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    console.log(newPassword);
    console.log(confirmPassword);

    if (newPassword && confirmPassword) {
      if (newPassword.value !== confirmPassword.value) {
        return {confirmPasswordError: true};
      } else {
        return null;
      }
    }
  }
}

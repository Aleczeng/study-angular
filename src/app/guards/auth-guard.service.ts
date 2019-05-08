import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService,
              public router: Router) {
    this.authService.isAuthenticated = false;
  }

  canActivate() {
    console.log(this.authService.isAuthenticated);
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']).then();
      return false;
    }
  }
}

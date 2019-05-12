import {Component} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLogin;

  constructor(public authService: AuthService,
              public router: Router) {
    this.isLogin = this.authService.isAuthenticated();
    this.authService.isLogin.subscribe(isLogin => {
      this.isLogin = isLogin;
      console.log(this.isLogin);
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']).then();
  }
}

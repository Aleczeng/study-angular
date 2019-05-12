import {Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {LoginComponent} from './pages/login/login.component';


export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'nav', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

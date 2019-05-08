import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NAV_ROUTES} from './nav.routing';
import {PagesModule} from './pages.module';
import {NavComponent} from './nav.component';

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(NAV_ROUTES),
    PagesModule,
  ],
})
export class NavModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MyErrorHandler} from './common/my-error-handler';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {APP_ROUTES} from './app.routing';
import {NavModule} from './pages/nav.module';
import {PagesModule} from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    NavModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

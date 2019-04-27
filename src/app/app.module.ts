import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthorListComponent} from './pages/author/author-list/author-list.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthorDetailsComponent} from './pages/author/author-details/author-details.component';
import {DataBindingComponent} from './pages/data-binding/data-binding.component';
import {PagesModule} from './pages/pages.module';
import {PipesComponent} from './pages/pipes-example/pipes.component';
import {ReuseComponentComponent} from './pages/reuse-component/reuse-component.component';
import {DirectivesStudyComponent} from './pages/directives-study/directives-study.component';
import {FormsStudyComponent} from './pages/forms-study/forms-study.component';
import {HttpStudyComponent} from './pages/http-study/http-study.component';
import {MyErrorHandler} from './common/my-error-handler';
import {HttpExerciseComponent} from './pages/http-exercise/http-exercise.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FirebaseStudyComponent} from './pages/firebase-study/firebase-study.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'author', component: AuthorListComponent},
  {path: 'author/:id/:name', component: AuthorDetailsComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'reuse-component', component: ReuseComponentComponent},
  {path: 'directives-study', component: DirectivesStudyComponent},
  {path: 'forms-study', component: FormsStudyComponent},
  {path: 'http-study', component: HttpStudyComponent},
  {path: 'http-exercise', component: HttpExerciseComponent},
  {path: 'firebase-study', component: FirebaseStudyComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

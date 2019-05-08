import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthorListComponent} from './pages/author/author-list/author-list.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthorDetailsComponent} from './pages/author/author-details/author-details.component';
import {DataBindingComponent} from './pages/data-binding/data-binding.component';
import {PipesComponent} from './pages/pipes-example/pipes.component';
import {ReuseComponentComponent} from './pages/reuse-component/reuse-component.component';
import {DirectivesStudyComponent} from './pages/directives-study/directives-study.component';
import {FormsStudyComponent} from './pages/forms-study/forms-study.component';
import {HttpStudyComponent} from './pages/http-study/http-study.component';
import {HttpExerciseComponent} from './pages/http-exercise/http-exercise.component';
import {FirebaseStudyComponent} from './pages/firebase-study/firebase-study.component';
import {LoginComponent} from './pages/login/login.component';


export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'nav', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthorListComponent} from './author/author-list/author-list.component';
import {AuthorDetailsComponent} from './author/author-details/author-details.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {PipesComponent} from './pipes-example/pipes.component';
import {ReuseComponentComponent} from './reuse-component/reuse-component.component';
import {DirectivesStudyComponent} from './directives-study/directives-study.component';
import {FormsStudyComponent} from './forms-study/forms-study.component';
import {HttpStudyComponent} from './http-study/http-study.component';
import {FirebaseStudyComponent} from './firebase-study/firebase-study.component';
import {HttpExerciseComponent} from './http-exercise/http-exercise.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NavComponent} from './nav.component';
import {AuthGuardService} from '../guards/auth-guard.service';


export const NAV_ROUTES: Routes = [
  {
    path: 'nav',
    component: NavComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
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
    ],
    canActivate: [AuthGuardService],
  },
];

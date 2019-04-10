import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthorModule} from './author/author.module';
import {RouterModule} from '@angular/router';
import {PipesComponent} from './pipes-example/pipes.component';
import {CommonModule} from '@angular/common';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {PipesModule} from '../pipes/pipes.module';
import {ReuseComponentComponent} from './reuse-component/reuse-component.component';
import {DirectivesStudyComponent} from './directives-study/directives-study.component';
import {DirectivesModule} from '../directives/directives.module';
import {FormsStudyComponent} from './forms-study/forms-study.component';
import {HttpStudyComponent} from './http-study/http-study.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpExerciseComponent} from './http-exercise/http-exercise.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    ReuseComponentComponent,
    DirectivesStudyComponent,
    NotFoundComponent,
    FormsStudyComponent,
    HttpStudyComponent,
    HttpExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AuthorModule,
    CommonModule,
    SharedModule,
    DirectivesModule,
    PipesModule,
    HttpClientModule
  ],
  exports: [
    NavBarComponent,
    PipesComponent,
    ReuseComponentComponent,
  ]
})
export class PagesModule {
}

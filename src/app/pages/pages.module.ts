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

@NgModule({
  declarations: [
    DataBindingComponent,
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    ReuseComponentComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AuthorModule,
    CommonModule,
    SharedModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    ReuseComponentComponent,
    NotFoundComponent,
  ]
})
export class PagesModule {
}

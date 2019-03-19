import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthorModule} from './author/author.module';
import {RouterModule} from '@angular/router';
import {PipesComponent} from './pipes-example/pipes.component';
import {SummaryPipe} from '../pipes/summary.pipe';
import {CommonModule} from '@angular/common';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    DataBindingComponent,
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    NotFoundComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AuthorModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    NotFoundComponent,
  ]
})
export class PagesModule {
}

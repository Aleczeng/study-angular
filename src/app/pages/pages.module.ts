import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthorModule} from './author/author.module';
import {DataBindingModule} from './data-binding/data-binding.module';
import {RouterModule} from '@angular/router';
import {PipesComponent} from './pipes-example/pipes.component';
import {SummaryPipe} from '../pipes/summary.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    PipesComponent,
    NotFoundComponent,
    SummaryPipe
  ],
  imports: [
    RouterModule,
    AuthorModule,
    DataBindingModule,
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

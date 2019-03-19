import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthorModule} from './author/author.module';
import {DataBindingModule} from './data-binding/data-binding.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    AuthorModule,
    DataBindingModule
  ],
  exports: [
    HomeComponent,
    NavBarComponent,
    NotFoundComponent
  ]
})
export class PagesModule {
}

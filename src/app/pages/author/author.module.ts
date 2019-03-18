import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthorListComponent} from './author-list/author-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AuthorDetailsComponent} from './author-details/author-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AuthorListComponent,
    AuthorDetailsComponent,
  ]
})
export class AuthorModule {
}

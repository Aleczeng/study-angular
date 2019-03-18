import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthorComponent} from './author.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    AuthorComponent
  ]
})
export class AuthorModule {
}

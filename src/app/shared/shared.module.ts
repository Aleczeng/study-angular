import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FavStarComponent} from './fav-star/fav-star.component';

@NgModule({
  declarations: [
    FavStarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    FavStarComponent
  ]
})
export class SharedModule {
}

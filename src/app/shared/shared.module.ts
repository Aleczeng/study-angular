import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FavStarComponent} from './fav-star/fav-star.component';
import {PanelComponent} from './panel/panel.component';

@NgModule({
  declarations: [
    FavStarComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    FavStarComponent,
    PanelComponent
  ]
})
export class SharedModule {
}

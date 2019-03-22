import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FavStarComponent} from './fav-star/fav-star.component';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    FavStarComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    FavStarComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent
  ]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FavStarComponent} from './fav-star/fav-star.component';
import {PanelComponent} from './panel/panel.component';
import {LikeComponent} from './like/like.component';
import {ZippyComponent} from './zippy/zippy.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {FormErrorsComponent} from './form-errors/form-errors.component';
import {DialogComponent} from './dialog/dialog.component';
import {MatComponentsModule} from './mat-components.module';
import {QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [
    FavStarComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    FormErrorsComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatComponentsModule,
    QuillModule
  ],
  exports: [
    FavStarComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    FormErrorsComponent,
    DialogComponent
  ]
})
export class SharedModule {
}

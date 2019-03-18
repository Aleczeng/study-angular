import {NgModule} from '@angular/core';
import {DataBindingComponent} from './data-binding.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule {
}

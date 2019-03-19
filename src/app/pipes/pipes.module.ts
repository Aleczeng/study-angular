import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {TextUpperPipe} from './text-upper.pipe';



@NgModule({
  declarations: [
    SummaryPipe,
    TextUpperPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    SummaryPipe,
    TextUpperPipe
  ]
})
export class PipesModule {
}

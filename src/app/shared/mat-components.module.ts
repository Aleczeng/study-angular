import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatRadioModule, MatSelectModule} from '@angular/material';


@NgModule({
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class MatComponentsModule {
}

import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  result: boolean;
  name: string;

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
    console.log('Data', data);
    this.name = data.name;
    this.result = true;
  }

  onNoClick() {
    this.dialogRef.close();
  }
}

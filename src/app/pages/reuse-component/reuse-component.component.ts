import {Component} from '@angular/core';
import 'hammerjs';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-reuse-component',
  templateUrl: './reuse-component.component.html',
})
export class ReuseComponentComponent {
  onClick: boolean;
  emitValue: any;
  tweet: { isLiked: boolean, likesCount: number };
  foods: { value: number, viewValue: string }[];
  food: number;

  constructor(private matDialog: MatDialog) {
    this.onClick = false;
    this.tweet = {
      isLiked: false,
      likesCount: 0
    };
    this.foods = [
      {value: 0, viewValue: 'Steak'},
      {value: 1, viewValue: 'Pizza'},
      {value: 2, viewValue: 'Tacos'}
    ];
    this.food = 2;
  }

  onFavChange($event) {
    this.emitValue = $event;
  }

  openDialog() {
    this.matDialog.open(DialogComponent, {width: '300px', data: {name: 'Alec'}})
      .afterClosed().subscribe(resp => console.log(resp));
  }
}

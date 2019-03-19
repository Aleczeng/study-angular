import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fav-star',
  templateUrl: './fav-star.component.html',
})
export class FavStarComponent {
  @Input('favStatus') onClick: boolean;
  @Output() onFavChange = new EventEmitter();
  emitValue: any;

  constructor() {
  }

  onChange() {
    this.onClick = !this.onClick;
    this.onFavChange.emit(this.emitValue);
  }
}

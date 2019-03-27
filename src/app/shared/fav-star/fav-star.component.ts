import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fav-star',
  templateUrl: './fav-star.component.html',
})
export class FavStarComponent {
  @Input() favStatus: boolean;
  @Output() FavChange = new EventEmitter();
  emitValue: any;

  constructor() {
  }

  onChange() {
    this.favStatus = !this.favStatus;
    this.FavChange.emit(this.emitValue);
  }
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'fav-star',
  templateUrl: './fav-star.component.html',
})
export class FavStarComponent {
  @Input() onClick: boolean;

  constructor() {
  }

  onChange() {
    this.onClick = !this.onClick;
  }
}

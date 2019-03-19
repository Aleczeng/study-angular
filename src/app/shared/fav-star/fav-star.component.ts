import {Component} from '@angular/core';

@Component({
  selector: 'fav-star',
  templateUrl: './fav-star.component.html',
})
export class FavStarComponent {
  onClick: boolean;

  constructor() {
    this.onClick = false;
  }

  onChange() {
    this.onClick = !this.onClick;
  }
}

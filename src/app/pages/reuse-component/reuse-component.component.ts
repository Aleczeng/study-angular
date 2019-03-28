import {Component} from '@angular/core';

@Component({
  selector: 'app-reuse-component',
  templateUrl: './reuse-component.component.html',
})
export class ReuseComponentComponent {
  onClick: boolean;
  emitValue: any;
  tweet: { isLiked: boolean, likesCount: number };

  constructor() {
    this.onClick = false;
    this.tweet = {
      isLiked: false,
      likesCount: 0
    };
  }

  onFavChange($event) {
    this.emitValue = $event;
  }
}

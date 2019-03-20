import {Component} from '@angular/core';

@Component({
  selector: 'app-reuse-component',
  templateUrl: './reuse-component.component.html',
})
export class ReuseComponentComponent {
  onClick: boolean;
  emitValue: any;

  constructor() {
    this.onClick = false;
  }

  onFavChange($event) {
    this.emitValue = $event;
  }
}

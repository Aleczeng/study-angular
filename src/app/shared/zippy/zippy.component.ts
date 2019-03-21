import {Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpand: boolean;

  constructor() {
    this.isExpand = false;
  }

  toggle() {
    this.isExpand = !this.isExpand;
  }

}

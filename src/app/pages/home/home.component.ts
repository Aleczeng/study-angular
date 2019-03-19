import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  onClick: boolean;

  constructor() {
    this.onClick = false;
  }

  onChange() {
    this.onClick = !this.onClick;
  }
}

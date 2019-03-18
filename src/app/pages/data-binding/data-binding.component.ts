import {Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  isActive: boolean;
  templateValue: string;
  anotherTemplateValue: string;
  twoWayBinding: string;

  constructor() {
    this.isActive = true;
  }
  onClick($event) {
    this.isActive = !this.isActive;
    $event.stopPropagation();
    console.log('$event', $event);
  }

  onKeyUp() {
    console.log('Enter was pressed');
  }

  onTemplate($event) {
    this.templateValue = $event.target.value;
  }

  anotherTemplate(myValue) {
    this.anotherTemplateValue = myValue;
  }
}

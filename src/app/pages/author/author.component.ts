import {Component} from '@angular/core';
import {AuthorService} from '../../service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  protected authors: any;
  isActive: boolean;
  templateValue: string;
  anotherTemplateValue: string;
  twoWayBinding: string;

  constructor(private authorService: AuthorService) {
    this.authors = authorService.getAuthors();
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

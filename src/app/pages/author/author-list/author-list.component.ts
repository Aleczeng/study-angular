import {Component} from '@angular/core';
import {AuthorService} from '../../../service/author.service';
import {Author} from '../../../models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  protected authors: Author[];
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

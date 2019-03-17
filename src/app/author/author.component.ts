import {Component} from '@angular/core';
import {AuthorService} from '../service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
})
export class AuthorComponent {
  protected authors: any;

  constructor(private authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}

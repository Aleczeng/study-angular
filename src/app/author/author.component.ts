import {Component} from '@angular/core';
import {AuthorService} from '../service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  protected authors: any;
  isActive: boolean;

  constructor(private authorService: AuthorService) {
    this.authors = authorService.getAuthors();
    this.isActive = true;
  }

  onClick() {
    this.isActive = !this.isActive;
  }
}

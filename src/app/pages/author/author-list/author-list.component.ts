import {Component, OnInit} from '@angular/core';
import {AuthorService} from '../../../service/author.service';
import {Author} from '../../../models/author';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];
  page: number;
  pageSize: number;

  constructor(private router: ActivatedRoute) {
    this.authors = AuthorService.getAuthors();
  }

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      this.page = +params.get('page');
    });
    this.pageSize = 2;
  }

  onAdd() {
    this.authors.push({
      id: this.authors.length + 1,
      name: 'author' + String(this.authors.length + 1)
    });
  }

  onRemove(index) {
    this.authors.splice(index, 1);
  }

  trackAuthor(index, author) {
    return author ? author.id : undefined;
  }

  onReload() {
    this.authors = AuthorService.getAuthors();
  }
}

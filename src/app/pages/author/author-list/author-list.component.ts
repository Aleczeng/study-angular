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
  protected authors: Author[];

  page: number;
  pageSize: number;

  constructor(private authorService: AuthorService,
              private router: ActivatedRoute) {
    this.authors = authorService.getAuthors();
  }

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      this.page = +params.get('page');
    });
    this.pageSize = 1;
  }
}

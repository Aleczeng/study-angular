import {NgModule} from '@angular/core';
import {AuthorService} from './author.service';
import {PostService} from './post.service';
import {DataService} from './data.service';

@NgModule({
  providers: [
    AuthorService,
    DataService,
    PostService],
})
export class ServicesModule {
}

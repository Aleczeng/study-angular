import {NgModule} from '@angular/core';
import {AuthorService} from './author.service';
import {PostService} from './post.service';

@NgModule({
  providers: [AuthorService, PostService],
})
export class ServicesModule {
}

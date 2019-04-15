import {NgModule} from '@angular/core';
import {AuthorService} from './author.service';
import {PostService} from './post.service';
import {FollowersService} from './followers.service';

@NgModule({
  providers: [
    AuthorService,
    PostService,
    FollowersService
  ],
})
export class ServicesModule {
}

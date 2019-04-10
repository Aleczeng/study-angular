import {NgModule} from '@angular/core';
import {AuthorService} from './author.service';
import {PostService} from './post.service';
import {DataService} from './data.service';
import {FollowersService} from './followers.service';

@NgModule({
  providers: [
    AuthorService,
    DataService,
    PostService,
    FollowersService
  ],
})
export class ServicesModule {
}

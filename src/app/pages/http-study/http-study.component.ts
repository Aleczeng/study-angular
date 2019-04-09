import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-http-study',
  templateUrl: './http-study.component.html',
})
export class HttpStudyComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    // get
    this.postService.getPosts().subscribe(resp => {
      this.posts = resp;
    });
  }

  // post
  createNewPost(input: HTMLInputElement) {
    const post: any = {title: input.value};
    input.value = '';
    this.postService.createPosts(post).subscribe(resp => {
      console.log(resp);
      this.posts.splice(0, 0, resp);
    });
  }

  // update
  changePost(post) {
    this.postService.updatePosts(post.id).subscribe(resp => {
      console.log(resp);
    });
  }


  // delete
  deletePost(post) {
    this.postService.deletePosts(post.id).subscribe(resp => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }


}

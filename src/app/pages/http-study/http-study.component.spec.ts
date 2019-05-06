import {Component, OnInit} from '@angular/core';
import {PostService} from '../../service/post.service';
import {Post} from '../../interface/post';

@Component({
  selector: 'app-http-study',
  templateUrl: './http-study.component.html',
})
export class HttpStudyComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((resp: Post[]) => {
      this.posts = resp;
    });
  }

  createNewPost(input: HTMLInputElement) {
    const post: any = {title: input.value};
    input.value = '';
    this.postService.create(post).subscribe((resp: Post) => {
      console.log(resp);
      this.posts.splice(0, 0, resp);
    });
  }

  changePost(post) {
    this.postService.update(post.id).subscribe(resp => {
      console.log(resp);
    });
  }

  deletePost(post) {
    this.postService.delete(post.id).subscribe(() => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}

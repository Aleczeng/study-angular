import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-study',
  templateUrl: './http-study.component.html',
})
export class HttpStudyComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(resp => {
      this.posts = resp;
      console.log(this.posts);
    });
  }

  createNewPost(input: HTMLInputElement) {
    const post: any = {title: input.value};
    input.value = '';
    this.http.post(this.url, post).subscribe(resp => {
      console.log(resp);
      this.posts.splice(0, 0, resp);
    });
  }

  changePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRed: true})).subscribe(response => {
      console.log(response);
    });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }


}

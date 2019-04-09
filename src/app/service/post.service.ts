import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {

  }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.http.get(this.url);
  }

  createPosts(content) {
    return this.http.post(this.url, content);
  }

  updatePosts(id) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({isRed: true}));
  }

  deletePosts(id) {
    return this.http.delete(this.url + '/' + id);
  }
}

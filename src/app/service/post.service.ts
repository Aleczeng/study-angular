import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../interface/post';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  // get
  getPosts() {
    return this.http.get<Post[]>(this.url).pipe(catchError(err => throwError(err)));
  }

  // post
  createPosts(content) {
    return this.http.post<Post>(this.url, content).pipe(catchError(err => throwError(err)));
  }

  // update
  updatePosts(id) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({isRed: true})).pipe(catchError(err => throwError(err)));
  }

  // delete
  deletePosts(id) {
    return this.http.delete(this.url + '/' + id).pipe(catchError(err => throwError(err)));
  }
}

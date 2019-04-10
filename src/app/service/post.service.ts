import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../interface/post';
import {catchError} from 'rxjs/operators';
import {HandleError} from '../common/handle-error';

@Injectable()
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  // get
  getPosts() {
    return this.http.get<Post[]>(this.url).pipe(catchError(HandleError.handleError));
  }

  // post
  createPosts(content) {
    return this.http.post<Post>(this.url, content).pipe(catchError(HandleError.handleError));
  }

  // update
  updatePosts(id) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({isRed: true})).pipe(catchError(HandleError.handleError));
  }

  // delete
  deletePosts(id) {
    return this.http.delete(this.url + '/' + id).pipe(catchError(HandleError.handleError));
  }
}

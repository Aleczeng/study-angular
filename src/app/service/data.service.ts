import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) {
  }

  // get
  getAll() {
    return this.http.get(this.url).pipe(catchError(err => throwError(err)));
  }

  // post
  create(resource) {
    return this.http.post(this.url, resource).pipe(catchError(err => throwError(err)));
  }

  // update
  update(resource) {
    return this.http.patch(this.url + '/' + resource, JSON.stringify({isRed: true})).pipe(catchError(err => throwError(err)));
  }

  // delete
  delete(resource) {
    return this.http.delete(this.url + '/' + resource).pipe(catchError(err => throwError(err)));
  }
}

import {ErrorHandler} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

export class MyErrorHandler implements ErrorHandler {
  handleError(err: HttpErrorResponse) {
    console.log(err);
    console.error('Something bad happened; please try again later.');
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${err.status}, ` +
        `body was: ${err.error}`);
    }
  }
}

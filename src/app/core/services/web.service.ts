import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpOptions } from '@constants/definitions';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  post(url: string, body: any) {
    return this.http
      .post<any>(url, body, HttpOptions)
      .pipe(catchError(this.handleError));
  }

  put(url: string, body: any) {
    return this.http
      .put<any>(url, body, HttpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

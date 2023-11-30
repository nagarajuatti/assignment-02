import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService <T> {
  private apiURL = "http://localhost:9095/api"; 
  private data: T[] = [];
  getById: any;


  constructor(public http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL + '/users').pipe(catchError(this.errorHandler));
  }

  getUserByID(id: number): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users/' + id).pipe(catchError(this.errorHandler))
  }

   updateUser(index: number, item: T): void {
    this.data[index] = item;
  }

    deleteUser(userId: number): Observable<void> {
      // this.data.splice(index, 1);
      return this.http.delete<void>(this.apiURL + '/users/' + userId).pipe(catchError(this.errorHandler));
    }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues about what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened. Please try again later.');
  }
}

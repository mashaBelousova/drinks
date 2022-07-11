import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Drink {
  id: string,
  name: string,
  size: string,
  price: string,
  color: string,
  isSponsored: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DrinkService  {
  private path = 'drinks'
  isLoading$ = new BehaviorSubject<boolean>(false);
  isError$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient
  ) { }

  public list(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${environment.apiUrl}/${this.path}`).pipe(
      tap(() => {
        this.isLoading$.next(true);
        this.isError$.next(false);
      }),
      catchError(error => {
        this.isLoading$.next(false);
        this.isError$.next(true);

        return throwError(error);
      }),
      map(result => {
        this.isLoading$.next(false);
        return result;
      })
    )
  }
}


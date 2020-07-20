import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ListMoviesModel, MovieDetail } from '../models';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  searchMovies$(
    search: string,
    type: string,
    year: string,
    page: number
  ): Observable<ListMoviesModel> {
    const url = `${environment.url}${environment.apikey}`;
    const urlParams = new HttpParams()
      .set('s', search)
      .set('type', type)
      .set('y', year)
      .set('page ', page.toString());
    return this.http.get(url, { params: urlParams }).pipe(
      switchMap((movies: ListMoviesModel) => {
        if (!movies.Search) {
          return throwError('Movie not found!');
        }
        return of(movies);
      })
    );
  }

  getDetailMovie$(movieId: string): Observable<MovieDetail> {
    const url = `${environment.url}${environment.apikey}`;
    const urlParams = new HttpParams().set('i', movieId);
    return this.http.get<MovieDetail>(url, { params: urlParams });
  }
}

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ListMoviesModel, MovieDetail } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly _favoriteMovies = new BehaviorSubject<MovieDetail[]>([]);
  private readonly _movies = new BehaviorSubject<ListMoviesModel>({Search: []});

  constructor() {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    this._favoriteMovies.next(favoriteMovies ? favoriteMovies : []);
  }

  getFavoriteMovies(): Observable<MovieDetail[]> {
    return this._favoriteMovies.asObservable();
  }

  addFavoriteMovies(movie: MovieDetail): void {
    const newState = [...this._favoriteMovies.getValue(), movie];
    localStorage.setItem('favoriteMovies', JSON.stringify(newState));
    this._favoriteMovies.next(newState);
  }

  removeFavoriteMovies(movie: MovieDetail): void {
    const newState = this._favoriteMovies.getValue().filter(value => value.imdbID !== movie.imdbID);
    localStorage.setItem('favoriteMovies', JSON.stringify(newState));
    this._favoriteMovies.next(newState);
  }

  getMovies(): Observable<ListMoviesModel> {
    return this._movies.asObservable();
  }

  addMovies(movies: ListMoviesModel): void {
    this._movies.next(movies);
  }

}

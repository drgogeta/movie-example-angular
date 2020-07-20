import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListMoviesModel, MovieDetail } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly favoriteMovies = new BehaviorSubject<MovieDetail[]>([]);
  private readonly movies = new BehaviorSubject<ListMoviesModel>({Search: []});

  constructor() {
    const storageMovies = JSON.parse(localStorage.getItem('favoriteMovies'));
    this.favoriteMovies.next(storageMovies ? storageMovies : []);
  }

  getFavoriteMovies(): Observable<MovieDetail[]> {
    return this.favoriteMovies.asObservable();
  }

  addFavoriteMovies(movie: MovieDetail): void {
    const newState = [...this.favoriteMovies.getValue(), movie];
    localStorage.setItem('favoriteMovies', JSON.stringify(newState));
    this.favoriteMovies.next(newState);
  }

  removeFavoriteMovies(movie: MovieDetail): void {
    const newState = this.favoriteMovies.getValue().filter(value => value.imdbID !== movie.imdbID);
    localStorage.setItem('favoriteMovies', JSON.stringify(newState));
    this.favoriteMovies.next(newState);
  }

  getMovies(): Observable<ListMoviesModel> {
    return this.movies.asObservable();
  }

  addMovies(movies: ListMoviesModel): void {
    this.movies.next(movies);
  }

}

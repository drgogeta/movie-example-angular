import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typesMovie, MovieDetail } from '../models/movie-detail.model';
import { MovieService } from '../services';
import { Observable, fromEvent } from 'rxjs';
import { ListMoviesModel } from '../models';
import { StateService } from '../services/state.service';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
/*
  @ViewChild('searchInput')
  input: ElementRef;
  @ViewChild('searchMovies')
  button: ElementRef;
*/
  searchForm: FormGroup;
  typeMovies = typesMovie;
  page: number = 1;

  movies$: Observable<ListMoviesModel>;
  favoriteMovies$: Observable<MovieDetail[]>;

  constructor(
    private service: MovieService,
    private state: StateService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.favoriteMovies$ = this.state.getFavoriteMovies();
    this.movies$ = this.state.getMovies();
    this.searchForm = new FormGroup({
      search: new FormControl('', [Validators.required]),
      type: new FormControl(),
      year: new FormControl(),
    });
  }

  onSearch({search, type, year}): void {
    this.service.searchMovies$(search, type, year, this.page)
      .pipe(take(1))
      .subscribe({
        next: (value) => this.state.addMovies(value),
        error: (err) => this.openSnackBar(err)
      })
  }

  addFavorite(movie: MovieDetail): void {
    this.state.addFavoriteMovies(movie);
    this.openSnackBar('Movie add successful');
  }

  removeFavorite(movie: MovieDetail): void {
    this.state.removeFavoriteMovies(movie);
    this.openSnackBar('Movie remove successful');
  }

  openSnackBar(message: string) {
    this.searchForm.reset();
    this._snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

}

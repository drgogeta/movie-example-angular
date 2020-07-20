import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typesMovie, MovieDetail } from '../models/movie-detail.model';
import { MovieService } from '../services';
import { Observable, fromEvent } from 'rxjs';
import { ListMoviesModel } from '../models';
import { StateService } from '../services/state.service';
import { take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  searchForm: FormGroup;
  typeMovies = typesMovie;
  page = 1;

  movies$: Observable<ListMoviesModel>;
  favoriteMovies$: Observable<MovieDetail[]>;

  constructor(
    private service: MovieService,
    private state: StateService,
    private router: Router,
    private snackBar: MatSnackBar
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
      });
  }

  addFavorite(movie: MovieDetail): void {
    try {
      this.state.addFavoriteMovies(movie);
      this.openSnackBar('Movie add successful');
    } catch (err) {
      this.openSnackBar(err);
    }
  }

  removeFavorite(movie: MovieDetail): void {
    this.state.removeFavoriteMovies(movie);
    this.openSnackBar('Movie remove successful');
  }

  viewDetail(movieId: string){
    this.router.navigate([`/movie/detail/${movieId}`]);
  }

  openSnackBar(message: string) {
    this.searchForm.reset();
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

}

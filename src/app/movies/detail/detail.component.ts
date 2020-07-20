import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { MovieDetail } from '../models';
import { MovieService, StateService } from '../services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailMovie$: Observable<MovieDetail>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MovieService,
    private state: StateService,
    private snackBar: MatSnackBar,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.detailMovie$ = this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.service.getDetailMovie$(id))
      );
  }

  addFavorite(movie: MovieDetail): void {
    try {
      this.state.addFavoriteMovies(movie);
      this.openSnackBar('Movie add successful');
    } catch (err) {
      this.openSnackBar(err);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  previousPage(): void {
    this.location.back();
  }
}

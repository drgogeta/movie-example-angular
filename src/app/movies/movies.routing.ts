import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list';
import { DetailComponent } from './detail';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      // Default route
      { path: '', redirectTo: 'movies', pathMatch: 'full' },
      // list movies
      { path: 'movies', component: ListComponent },
      // Detail Movie
      { path: 'detail/:id', component: DetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRouting {}

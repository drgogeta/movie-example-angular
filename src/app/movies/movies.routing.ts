import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRouting { }

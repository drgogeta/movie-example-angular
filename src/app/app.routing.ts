import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'security', pathMatch: 'full' },
  // Movie Module
  { path: 'security', loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule), },
  // Security Module
  { path: 'movie', loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule), },
  // Unknown routes
  { path: '**', redirectTo: 'security', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouting { }

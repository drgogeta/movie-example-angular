import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionGuard } from './shared/guards/session.guard';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  // Movie Module
  { path: 'security', loadChildren: () => import('./security/security.module').then(mod => mod.SecurityModule), },
  // Security Module
  { path: 'movie', loadChildren: () => import('./movies/movies.module').then(mod => mod.MoviesModule), canActivate: [SessionGuard]},
  // Unknown routes
  { path: '**', redirectTo: 'movie', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouting { }

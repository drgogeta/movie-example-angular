import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { ListComponent } from './list/list.component';

import { SharedModule } from '../shared/shared.module';

import { MoviesRouting } from './movies.routing';
import { DetailComponent } from './detail/detail.component';
import { MovieComponent } from './movie.component';

@NgModule({
  declarations: [MovieComponent, ListComponent, DetailComponent],
  imports: [CommonModule, MoviesRouting, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CdkVirtualScrollViewport],
})
export class MoviesModule {}

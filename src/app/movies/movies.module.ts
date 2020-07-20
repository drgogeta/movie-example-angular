import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { ListComponent } from './list/list.component';

import { SharedModule } from '../shared/shared.module';

import { MoviesRouting } from './movies.routing';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MoviesRouting,
    SharedModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CdkVirtualScrollViewport]
})
export class MoviesModule { }

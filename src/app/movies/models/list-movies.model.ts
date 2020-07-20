import { MovieDetail } from './movie-detail.model';

export interface ListMoviesModel {
  Search: MovieDetail[];
  totalResults?: string;
  Response?: string;
}

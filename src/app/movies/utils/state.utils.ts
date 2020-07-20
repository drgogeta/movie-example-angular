import { MovieDetail } from '../models';

export class StateUtils {

  static validateExistMovie(movie: MovieDetail, currentState: MovieDetail[]): void {
    debugger
    const validate = currentState.find(value => value.imdbID === movie.imdbID);
    if (validate) {
      throw 'Movie already exits in you favorite';
    }
  }

}

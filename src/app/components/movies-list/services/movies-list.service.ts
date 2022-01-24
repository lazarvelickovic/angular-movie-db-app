import { Injectable } from '@angular/core';
import { WebService } from '@app/core/services/web.service';
import { ApiUrl } from '@constants/definitions';
import { Movie } from '@models/movie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  constructor(private webService: WebService) {}

  getMovies(): Observable<Movie[]> {
    return this.webService.get(ApiUrl.MOVIES);
  }

  addMovie(body: Movie): Observable<Movie> {
    return this.webService.post(ApiUrl.MOVIES, body);
  }

  updateMovie(body: Movie): Observable<Movie> {
    return this.webService.put(`${ApiUrl.MOVIES}/${body.id}`, body);
  }
}

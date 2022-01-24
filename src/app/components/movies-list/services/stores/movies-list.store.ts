import { Injectable } from '@angular/core';
import { Movie } from '@models/movie.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesStore {
  movies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  setMovies(movies: Movie[]): void {
    this.movies.next(movies);
  }

  addMovie(newMovie: Movie): void {
    this.movies.next([...this.movies.getValue(), newMovie]);
  }

  updateMovie(updatedMovie: Movie): void {
    this.movies.next(
      this.movies
        .getValue()
        .map((movie: Movie) =>
          movie.id === updatedMovie.id ? updatedMovie : movie
        )
    );
  }
}

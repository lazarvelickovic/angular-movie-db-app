import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Movie } from '@app/models/movie.interface';
import { Movies, NewMovie } from '@app/test-data/movies';
import { MoviesStore } from './movies-list.store';

describe('MoviesStore', () => {
  let service: MoviesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MoviesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call setMovies and save movies to movies store', () => {
    expect(service.movies.getValue().length).toEqual(0);

    service.setMovies(Movies);

    expect(service.movies.getValue().length).toEqual(Movies.length);
  });

  it('should call addMovie and add new movie to movies store', () => {
    service.setMovies(Movies);

    const moviesBeforeAdding: Movie[] = service.movies.getValue();
    expect(moviesBeforeAdding.length).toEqual(Movies.length);

    service.addMovie(NewMovie);

    const moviesAfterAdding: Movie[] = service.movies.getValue();
    expect(moviesAfterAdding.length).toEqual(moviesBeforeAdding.length + 1);
    expect(moviesAfterAdding[moviesAfterAdding.length - 1].id).toEqual(
      NewMovie.id
    );
  });

  it('should call updateMovies and update existing movie in movies store', () => {
    service.setMovies(Movies);

    const updatedMovie: Movie = {
      ...service.movies.getValue()[0],
      name: 'TEST',
    };
    service.updateMovie(updatedMovie);

    expect(service.movies.getValue()[0].name).toEqual('TEST');
  });
});

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Movies, NewMovie } from '@app/test-data/movies';
import { ApiUrl } from '@constants/definitions';
import { Movie } from '@models/movie.interface';
import { MoviesListService } from './movies-list.service';

describe('MoviesListService', () => {
  let service: MoviesListService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MoviesListService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getMovies and return an array of movies', () => {
    service.getMovies().subscribe((data: Movie[]) => {
      expect(data).toEqual(Movies);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: ApiUrl.MOVIES,
    });

    req.flush(Movies);
  });

  it('should call addMovie and return the added movie from the API', () => {
    service.addMovie(NewMovie).subscribe((data: Movie) => {
      expect(data).toEqual(NewMovie);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: ApiUrl.MOVIES,
    });

    req.flush(NewMovie);
  });

  it('should call updateMovie and return the updated movie from the API', () => {
    const movie: Movie = Movies[1];
    const updatedMovie: Movie = { ...movie, name: 'Test' };

    service.updateMovie(movie).subscribe((data: Movie) => {
      expect(data).toEqual(updatedMovie);
    });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `${ApiUrl.MOVIES}/${movie.id}`,
    });

    req.flush(updatedMovie);
  });
});

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Movies, NewMovie } from '@app/test-data/movies';
import { ApiUrl } from '@constants/definitions';
import { Movie } from '@models/movie.interface';
import { WebService } from './web.service';

describe('WebService', () => {
  let service: WebService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WebService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get and return an array of movies', () => {
    service.get(ApiUrl.MOVIES).subscribe((data: Movie[]) => {
      expect(data).toEqual(Movies);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: ApiUrl.MOVIES,
    });

    req.flush(Movies);
  });

  it('should call post and return the added movie from the API', () => {
    service.post(ApiUrl.MOVIES, NewMovie).subscribe((data: Movie) => {
      expect(data).toEqual(NewMovie);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: ApiUrl.MOVIES,
    });

    req.flush(NewMovie);
  });

  it('should call put and return the updated movie from the API', () => {
    const movie: Movie = Movies[1];
    const updatedMovie: Movie = { ...movie, name: 'Test' };

    service
      .put(`${ApiUrl.MOVIES}/${movie.id}`, movie)
      .subscribe((data: Movie) => {
        expect(data).toEqual(updatedMovie);
      });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `${ApiUrl.MOVIES}/${movie.id}`,
    });

    req.flush(updatedMovie);
  });

  it('should call handleError method when error happens', () => {
    const errorMsg = 'deliberate 404 error';

    const spy = spyOn<any>(service, 'handleError').and.callThrough();

    service.get(ApiUrl.MOVIES).subscribe({
      next: () => fail('should have failed with the 404 error'),
      error: (error: any) => {
        expect(spy).toHaveBeenCalled();
        expect(error.toString()).toEqual(
          'Error: Something bad happened; please try again later.'
        );
      },
    });

    const req = httpController.expectOne(ApiUrl.MOVIES);

    req.flush(errorMsg, { status: 404, statusText: 'Not Found' });
  });
});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movies } from '@app/test-data/movies';
import { Movie } from '@models/movie.interface';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListService } from './services/movies-list.service';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let service: MoviesListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(MoviesListService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call MoviesListService::getMovies on init', () => {
    spyOn(service, 'getMovies').and.callThrough();

    component.ngOnInit();

    expect(service.getMovies).toHaveBeenCalled();
  });

  it('should call MoviesListService::updateMovie on onRatingUpdate', () => {
    const updatedMovie: Movie = { ...Movies[0], rate: 5, numberOfVotes: 1 };

    spyOn(service, 'updateMovie').and.callThrough();

    component.onRatingUpdate(updatedMovie);

    expect(service.updateMovie).toHaveBeenCalledWith(updatedMovie);
  });
});

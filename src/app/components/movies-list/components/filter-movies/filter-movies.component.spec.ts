import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from '@app/models/movie.interface';
import { Movies } from '@app/test-data/movies';
import { FilterMoviesComponent } from './filter-movies.component';

describe('FilterMoviesComponent', () => {
  let component: FilterMoviesComponent;
  let fixture: ComponentFixture<FilterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterMoviesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter movies correctly and pass value to output', () => {
    component.movies = Movies;

    const event: any = { target: { value: 'the' } };
    const spy = spyOn(component.filterMoviesEvent, 'emit').and.callThrough();

    component.applyFilter(event);

    const expectedResult: Movie[] = [Movies[0], Movies[2], Movies[3]];
    expect(spy).toHaveBeenCalledWith(expectedResult);
  });
});

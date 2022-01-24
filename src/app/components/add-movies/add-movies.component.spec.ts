import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewMovie } from '@app/test-data/movies';
import { MoviesListService } from '../movies-list/services/movies-list.service';
import { AddMoviesComponent } from './add-movies.component';
import { ActorsService } from './services/actors.service';
import { ActorsStore } from './services/stores/actors.store';

describe('AddMoviesComponent', () => {
  let component: AddMoviesComponent;
  let fixture: ComponentFixture<AddMoviesComponent>;
  let actorsService: ActorsService;
  let moviesListService: MoviesListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMoviesComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [ActorsService, ActorsStore],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    actorsService = TestBed.inject(ActorsService);
    moviesListService = TestBed.inject(MoviesListService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ActorsService::getActors on init', () => {
    const spy = spyOn(actorsService, 'getActors').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call MoviesListService::addMovie on onSubmit', () => {
    const spy = spyOn(moviesListService, 'addMovie').and.callThrough();
    component.onSubmit(NewMovie);
    expect(spy).toHaveBeenCalledWith(NewMovie);
  });
});

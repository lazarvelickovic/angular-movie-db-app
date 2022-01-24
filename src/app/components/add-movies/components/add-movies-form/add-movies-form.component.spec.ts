import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Actors, ActorsAfterMapping } from '@app/test-data/actors';
import { AddMoviesFormComponent } from './add-movies-form.component';

describe('AddMoviesFormComponent', () => {
  let component: AddMoviesFormComponent;
  let fixture: ComponentFixture<AddMoviesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMoviesFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submitMovieEvent on onSubmit when form is valid', () => {
    const form: FormGroup = new FormGroup({
      name: new FormControl('Test'),
      year: new FormControl('1922'),
      actor: new FormControl('Marlon Brando'),
    });

    const spy = spyOn(component.submitMovieEvent, 'emit').and.callThrough();

    component.onSubmit(form);

    expect(spy).toHaveBeenCalled();
  });

  it('should not emit submitMovieEvent on onSubmit when form is invalid', () => {
    const control = new FormControl('', Validators.required);
    const form: FormGroup = new FormGroup({ name: control });

    const spy = spyOn(component.submitMovieEvent, 'emit').and.callThrough();

    component.onSubmit(form);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should map actors for add movie field config', () => {
    const result = component['mapActorsToAddMovieFieldConfig'](Actors);

    expect(result).toEqual(ActorsAfterMapping);
  });
});

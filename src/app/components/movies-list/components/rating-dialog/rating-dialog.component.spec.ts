import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogMock } from '@app/mocks/mat-dialog-ref-mock';
import { Movies } from '@app/test-data/movies';
import { RatingDialogComponent } from './rating-dialog.component';

describe('RatingDialogComponent', () => {
  let component: RatingDialogComponent;
  let fixture: ComponentFixture<RatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingDialogComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: DialogMock },
        { provide: MAT_DIALOG_DATA, useValue: Movies[0] },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call MatDialogRef::close() on onSubmit when form is valid', () => {
    const form: FormGroup = new FormGroup({ rate: new FormControl(5) });

    const spy = spyOn((component as any).dialogRef, 'close').and.callThrough();

    component.onSubmit(form);

    expect(spy).toHaveBeenCalledWith({
      ...Movies[0],
      rate: 5,
      numberOfVotes: 1,
    });
  });

  it('should not call MatDialogRef::close() on onSubmit when form is invalid', () => {
    const control = new FormControl('', Validators.required);
    const form: FormGroup = new FormGroup({ rate: control });

    const spy = spyOn((component as any).dialogRef, 'close').and.callThrough();

    component.onSubmit(form);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should call MatDialogRef::close() on onClose', () => {
    const spy = spyOn((component as any).dialogRef, 'close').and.callThrough();

    component.onClose();

    expect(spy).toHaveBeenCalled();
  });
});

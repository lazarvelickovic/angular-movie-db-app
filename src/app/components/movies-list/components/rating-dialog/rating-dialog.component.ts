import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MOVIE_RATING_FIELDS_CONFIG } from '@app/config/formly-conf';
import { Movie } from '@models/movie.interface';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'rating-dialog',
  templateUrl: './rating-dialog.component.html',
})
export class RatingDialogComponent {
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = MOVIE_RATING_FIELDS_CONFIG;

  constructor(
    private dialogRef: MatDialogRef<RatingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie
  ) {}

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      const rate: number = this.movie.rate
        ? this.movie.rate + form.value.rate
        : form.value.rate;

      const numberOfVotes: number = this.movie.numberOfVotes
        ? this.movie.numberOfVotes + 1
        : 1;

      const updatedMovie: Movie = {
        ...this.movie,
        rate: rate,
        numberOfVotes: numberOfVotes,
      };

      this.dialogRef.close(updatedMovie);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

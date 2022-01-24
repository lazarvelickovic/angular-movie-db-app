import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Util } from '@app/core/util';
import { ADD_MOVIES_FIELDS_CONFIG } from '@config/formly-conf';
import { Actor } from '@models/actor.interface';
import { Movie } from '@models/movie.interface';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'add-movies-form',
  templateUrl: './add-movies-form.component.html',
  styleUrls: ['./add-movies-form.component.scss'],
})
export class AddMoviesFormComponent {
  @Input()
  set actors(actors: Actor[]) {
    if (actors) {
      this.fields = [
        ...ADD_MOVIES_FIELDS_CONFIG,
        {
          key: 'actor',
          type: 'select',
          templateOptions: {
            label: 'Actor',
            options: this.mapActorsToAddMovieFieldConfig(actors),
            required: true,
          },
        },
      ];
    }
  }

  @Output() submitMovieEvent = new EventEmitter<Movie>();

  form: FormGroup = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      const submittedMovie: Movie = {
        id: Util.generateRandomId(),
        ...form.value,
      };

      this.submitMovieEvent.emit(submittedMovie);
    }
  }

  private mapActorsToAddMovieFieldConfig(actors: Actor[]) {
    return actors.map((actor: Actor) => {
      return { value: actor.name, label: actor.name };
    });
  }
}

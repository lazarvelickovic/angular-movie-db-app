import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AddMoviesComponent } from './add-movies.component';
import { AddMoviesFormComponent } from './components/add-movies-form/add-movies-form.component';
import { ActorsService } from './services/actors.service';
import { ActorsStore } from './services/stores/actors.store';

@NgModule({
  declarations: [AddMoviesComponent, AddMoviesFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [AddMoviesComponent],
  providers: [ActorsService, ActorsStore],
})
export class AddMoviesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FilterMoviesComponent } from './components/filter-movies/filter-movies.component';
import { RatingDialogComponent } from './components/rating-dialog/rating-dialog.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { MoviesListComponent } from './movies-list.component';

@NgModule({
  declarations: [
    FilterMoviesComponent,
    MoviesListComponent,
    RatingDialogComponent,
    TableComponentComponent,
  ],
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [MoviesListComponent],
})
export class MoviesListModule {}

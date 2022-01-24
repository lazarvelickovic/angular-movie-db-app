import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Movie } from '@models/movie.interface';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';

@Component({
  selector: 'table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss'],
})
export class TableComponentComponent {
  @Input()
  set filteredMovies(filteredMovies: Movie[]) {
    if (filteredMovies) {
      this.dataSource = new MatTableDataSource<Movie>(filteredMovies);
      this.dataSource.paginator = this.paginator;
    }
  }

  @Output() submitRatingEvent = new EventEmitter<Movie>();

  displayedColumns: string[] = ['name', 'year', 'actor', 'rate'];
  dataSource: MatTableDataSource<Movie>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  openDialog(movie: Movie): void {
    const dialogRef = this.dialog.open(RatingDialogComponent, { data: movie });

    dialogRef.afterClosed().subscribe((movie: Movie) => {
      if (movie) this.submitRatingEvent.emit(movie);
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '@models/movie.interface';

@Component({
  selector: 'filter-movies',
  templateUrl: './filter-movies.component.html',
})
export class FilterMoviesComponent {
  @Input() movies: Movie[];

  @Output() filterMoviesEvent = new EventEmitter<Movie[]>();

  applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value
      .toLowerCase()
      .trim();

    const filteredMovies: Movie[] = this.movies.filter((movie: Movie) => {
      return (
        movie.name.toLowerCase().includes(filterValue) ||
        movie.actor.toLowerCase().includes(filterValue)
      );
    });

    this.filterMoviesEvent.emit(filteredMovies);
  }
}

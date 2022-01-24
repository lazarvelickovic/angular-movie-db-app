import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '@models/movie.interface';
import { Subject, takeUntil } from 'rxjs';
import { MoviesListService } from './services/movies-list.service';
import { MoviesStore } from './services/stores/movies-list.store';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  filteredMovies: Movie[];

  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private moviesListService: MoviesListService,
    private moviesStore: MoviesStore
  ) {}

  ngOnInit(): void {
    this.moviesListService.getMovies().subscribe((movies: Movie[]) => {
      this.moviesStore.setMovies(movies);
    });

    this.moviesStore.movies
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((movies: Movie[]) => {
        this.movies = movies;
        this.filteredMovies = this.movies;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  applyFilter(filteredMovies: Movie[]): void {
    this.filteredMovies = filteredMovies;
  }

  onRatingUpdate(movie: Movie): void {
    this.moviesListService
      .updateMovie(movie)
      .subscribe((movie: Movie) => this.moviesStore.updateMovie(movie));
  }
}

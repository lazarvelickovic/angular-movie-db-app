import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesListService } from '@components/movies-list/services/movies-list.service';
import { MoviesStore } from '@components/movies-list/services/stores/movies-list.store';
import { Actor } from '@models/actor.interface';
import { Movie } from '@models/movie.interface';
import { Subject, takeUntil } from 'rxjs';
import { ActorsService } from './services/actors.service';
import { ActorsStore } from './services/stores/actors.store';

@Component({
  selector: 'add-movies',
  templateUrl: './add-movies.component.html',
})
export class AddMoviesComponent implements OnInit, OnDestroy {
  actors: Actor[];

  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private actorsService: ActorsService,
    private actorsStore: ActorsStore,
    private moviesListService: MoviesListService,
    private moviesStore: MoviesStore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actorsService
      .getActors()
      .subscribe((actors: Actor[]) => this.actorsStore.setActors(actors));

    this.actorsStore.actors
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((actors: Actor[]) => (this.actors = actors));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  onSubmit(movie: Movie) {
    this.moviesListService.addMovie(movie).subscribe((movie: Movie) => {
      this.moviesStore.addMovie(movie);
      this.router.navigate(['/']);
    });
  }
}

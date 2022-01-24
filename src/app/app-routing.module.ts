import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from '@components/add-movies/add-movies.component';
import { MoviesListComponent } from '@components/movies-list/movies-list.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { AppRoutes } from './app-routing.config';

const routes: Routes = [
  { path: AppRoutes.MOVIES_LIST, component: MoviesListComponent },
  { path: AppRoutes.ADD_MOVIES, component: AddMoviesComponent },
  { path: '', redirectTo: AppRoutes.MOVIES_LIST, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

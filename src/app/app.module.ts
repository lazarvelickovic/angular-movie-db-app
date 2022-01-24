import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VALIDATION_MESSAGES } from '@app/config/formly-conf';
import { AddMoviesModule } from '@components/add-movies/add-movies.module';
import { MoviesListModule } from '@components/movies-list/movies-list.module';
import { PageNotFoundModule } from '@components/page-not-found/page-not-found.module';
import { FormlyModule } from '@ngx-formly/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AddMoviesModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MoviesListModule,
    NoopAnimationsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: VALIDATION_MESSAGES.REQUIRED },
      ],
    }),
    PageNotFoundModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

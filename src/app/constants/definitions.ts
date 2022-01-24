import { HttpHeaders } from '@angular/common/http';

export const ApiUrl = {
  MOVIES: 'http://localhost:3000/movies',
  ACTORS: 'http://localhost:3000/actors',
};

export const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

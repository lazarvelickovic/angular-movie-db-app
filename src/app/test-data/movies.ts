import { Util } from '@app/core/util';
import { Movie } from '@models/movie.interface';

export const Movies: Movie[] = [
  {
    id: 'malgfb4p2',
    name: 'The Godfather',
    year: 1972,
    actor: 'Marlon Brando',
  },
  {
    id: 'p7a3r5hwl',
    name: 'Fight Club',
    year: 1999,
    actor: 'Brad Pitt',
  },
  {
    id: 'j8qnq74yf',
    name: 'The Matrix',
    year: 1999,
    actor: 'Keanu Reeves',
  },
  {
    id: 'ohin21bx2',
    name: 'Interstellar',
    year: 2014,
    actor: 'Matthew McConaughey',
  },
  {
    id: 'mi36184cz',
    name: 'Apocalypse Now',
    year: 1979,
    actor: 'Martin Sheen',
  },
];

export const NewMovie: Movie = {
  id: Util.generateRandomId(),
  name: 'Test',
  year: 1922,
  actor: 'Test',
};

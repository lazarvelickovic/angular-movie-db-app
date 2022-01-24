import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actors } from '@app/test-data/actors';
import { ActorsStore } from './actors.store';

describe('ActorsStore', () => {
  let service: ActorsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActorsStore],
    });
    service = TestBed.inject(ActorsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call setActors and save movies to actors store', () => {
    expect(service.actors.getValue().length).toEqual(0);

    service.setActors(Actors);

    expect(service.actors.getValue().length).toEqual(Actors.length);
  });
});

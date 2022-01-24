import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actors } from '@app/test-data/actors';
import { ApiUrl } from '@constants/definitions';
import { Actor } from '@models/actor.interface';
import { ActorsService } from './actors.service';

describe('ActorsService', () => {
  let service: ActorsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActorsService],
    });
    service = TestBed.inject(ActorsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getActors and return an array of actors', () => {
    service.getActors().subscribe((data: Actor[]) => {
      expect(data).toEqual(Actors);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: ApiUrl.ACTORS,
    });

    req.flush(Actors);
  });
});

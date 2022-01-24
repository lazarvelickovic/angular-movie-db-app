import { Injectable } from '@angular/core';
import { ApiUrl } from '@constants/definitions';
import { WebService } from '@core/services/web.service';
import { Actor } from '@models/actor.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ActorsService {
  constructor(private webService: WebService) {}

  getActors(): Observable<Actor[]> {
    return this.webService.get(ApiUrl.ACTORS);
  }
}

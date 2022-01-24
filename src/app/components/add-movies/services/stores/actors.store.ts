import { Injectable } from '@angular/core';
import { Actor } from '@models/actor.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActorsStore {
  actors: BehaviorSubject<Actor[]> = new BehaviorSubject<Actor[]>([]);

  setActors(actors: Actor[]): void {
    this.actors.next(actors);
  }
}

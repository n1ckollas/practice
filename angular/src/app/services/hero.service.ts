import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Received all the messages");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    const hero  = HEROES.find(h => h.id === id);
    this.messageService.add(`Found a hero by id => ${hero.name}`);
    return of(hero);
  }
}

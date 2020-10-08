import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Fetched the Heroes");
    return of(HEROES);
  }

  getHero(hero: Hero): Hero {
    return HEROES.find(h => h.id === hero.id);
  }
}

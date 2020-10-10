import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor( private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("Fetched the heroes")
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(`Found hero => ${hero.name}`);
    return of(hero);
  }

}

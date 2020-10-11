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

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("Fetched All the heroes.")
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add("Fetched a single Hero");
    return of(HEROES.find(h => h.id === id));
  }

}

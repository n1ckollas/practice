import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HERO Service: Fetched all the heroes")
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add("HERO Service: Got one hero")
    return of(HEROES.find(h => h.id === id))
  }
}

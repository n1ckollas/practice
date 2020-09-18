import { Injectable } from '@angular/core';
import { Hero } from './types/hero.type';
import { HEROES } from './types/mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
  getHero(id: number){
    this.messageService.add("HeroService: fetching hero with id" + id);
    return of(HEROES.find(hero => hero.id === id));
  }
}

import { Injectable } from '@angular/core';
import { Hero } from '../components/hero';
import { HEROES } from '../components/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessagesService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero service: `fetched heroes');
    return of(HEROES);
  }
}

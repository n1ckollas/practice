import { Injectable } from '@angular/core';
import { Hero } from './types/hero.type';
import { HEROES } from './types/mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Hero[] {
    // implement an observable.
    return HEROES;
  }
}

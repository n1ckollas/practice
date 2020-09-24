import { Injectable } from '@angular/core';
import {Hero} from '../types/hero.type';
import {HEROES} from '../types/mock-heroes';
import {MessageService} from './message.service';
import {Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private mService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.mService.add("Get Heroes: Heroes are fetched.")
    return of(HEROES);
  }
}

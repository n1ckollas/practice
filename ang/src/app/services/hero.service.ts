import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { Observable, of} from 'rxjs';
import {MessagesService} from '../services/messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messagesService:MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    this.messagesService.add('Fetched:: HEROES')
    return of(HEROES);
  }
  getHero(id:number){
    this.messagesService.add("FOUND :: Hero ID :: " + id);

    return of(HEROES.find(hero => hero.id === id))
  }
  
}

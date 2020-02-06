import { Injectable } from '@angular/core';
import { HEROES } from '../models/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService:MessagesService) { }

  getHeroes(){
    this.messagesService.add("Fetched:: Heroes")
    return of(HEROES);
  }
  getHero(id){
    this.messagesService.add("FOUND:: Hero ID::" + id)
    return of(HEROES.find(hero => hero.id === id))
  }
  
}

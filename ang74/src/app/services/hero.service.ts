import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class HeroService {
  heroUrl = "api/heroes";

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) { }
  
  private log(message: string){
    this.messageService.add(`Hero Service ${message}`);
  }
  private handlError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed with message ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Fetched all the heroes");
    return this.httpClient.get<Hero[]>(this.heroUrl);
  }

  getHero(id:number): Observable<Hero>{
    return this.httpClient.get<Hero>(`${this.heroUrl}/${id}`);
  }
}

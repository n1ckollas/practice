import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  heroUrl = "api/heroes";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

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
    return this.httpClient.get<Hero[]>(this.heroUrl).pipe(
      tap(_ => this.log("Fetched All heroes")),
      catchError(this.handlError<Hero[]>('Fethcing All heroes failed', []))
    )
  }

  getHero(id:number): Observable<Hero>{
    return this.httpClient.get<Hero>(`${this.heroUrl}/${id}`).pipe(
      tap(_ => this.log(`Fethced Hero  with id ${id}`)),
      catchError(this.handlError<Hero>("Failed to fethc given hero"))
    )
  }

  updateHero(hero : Hero): Observable<any> {
    return this.httpClient.put<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log("HERO Service, Hero updated")),
      catchError(this.handlError<Hero>('Did not update the hero' ))
    )
  }

  addHero(hero: Hero): Observable<Hero> {
   return this.httpClient.post<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
     tap( (newHero: Hero) => this.log(`Hero Service Add Hero => ${newHero}`)),
     catchError( this.handlError<Hero>("Did not create given Hero"))
   )
  }

  

}

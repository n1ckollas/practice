import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../types/hero.type';
import { MessageService } from './message.service';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private messageService: MessageService,
    private http:HttpClient,
  ) { }

  private log(message: string): void {
    this.messageService.add(`HERO Service: ${message}`)
  }
  
  private handlError<T>(operation = 'operation', result?: T) {
   return (error : any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed with message : ${error.body.error}`);
    return of(result as T);
   } 
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      tap(_ => this.log("Fetched Heroes!")),
      catchError(this.handlError<Hero[]>("Failed to load Heroes", []))
    )
  }

  getHero(id: number): Observable<Hero>{
    const url = `${this.heroUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Found a single Hero`)),
      catchError(this.handlError<Hero>("Failure to find a hero"))
    )
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Updated hero => ${hero.name} `)),
      catchError(this.handlError<Hero>("Failde to update a hero"))
    )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap((newHero) => this.log(`Created hero => ${newHero.name} `)),
      catchError(this.handlError<Hero>("Failde to create a hero"))
    )
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroUrl}/${hero.id}`;
    return this.http.delete<Hero>(url).pipe(
      tap(_ => this.log(`Deleted hero => ${hero.name}`)),
      catchError(this.handlError<Hero>("Failde to delte a hero")) 
    )
  }

  searchHero(term: string): Observable<Hero[]> {
   const url = `${this.heroUrl}/?name=${term}`;

   return this.http.get<Hero[]>(url).pipe(
    tap(heroes => heroes.length ? 
        this.log(`Found ${heroes.length} heroes`) :
        this.log(`Found NO heroes`)),
    catchError(this.handlError<Hero[]>("Failed hero call")) 
   )
  } 
}

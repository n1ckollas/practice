import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from '../types/hero.type';
import {MessageService} from './message.service';
import {Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private mService:MessageService,
    private http:HttpClient,
  ) { }

  private log(message: string){
    this.mService.add(`HeroService : ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log("Heroes were fetched.")),
      catchError(this.handleError<Hero[]>("getHeroes", []))
    )
  }
  
  getHero(id:number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fethced Hero id: ${id}`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    );
  }

  updateHero(hero: Hero){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`Updated hero : ${hero}`),
      catchError(this.handleError<any>("updated hero")))
    )
  }

  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`Add dded a hero : ${hero}`)),
      catchError(this.handleError<Hero>("Did not add a hero"))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/:${id}`;
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log("Hero Deleted")),
      catchError(this.handleError<Hero>("Hero Was NOT deleted."))
    )
  }
  searchHeroes(term: string): Observable<Hero[]> {
    if( !term.trim()){
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`Found a hero ${term}`)),
      catchError(this.handleError<Hero[]>("NO Search took place."))
    )
  }

}

import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private log(message: string){
    this.messageService.add(`HERO Service: ${message}`)
  }

  private handlError<T>(operation = 'operation', result?:T){
    return(error: any): Observable<T> => {
      console.error(error.messaage);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log("Fetched All the heroes")),
      catchError(this.handlError<Hero[]>("Fetch for all failed"))
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url).pipe(
      tap((hero: Hero) => this.log(`Found a hero => ${hero.name}`)),
      catchError(this.handlError<Hero>("No Hero found"))
    )
  }

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Hero Updated ${hero.name}`)),
      catchError(this.handlError<Hero>("Update Failded"))
    )
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        tap((newHero: Hero) => this.log(`Hero Created ${newHero.name}`)),
        catchError(this.handlError<Hero>("CREATE Failded"))
    )
  }
}

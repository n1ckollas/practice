import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'api/heroes';
  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'}),
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }
  
  private log(message: string): void{
    this.messageService.add("HERO Service: " + message);
  }

  private handlError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T>   => {
      console.error(error);
      this.log(`${operation} failed with error => ${error.message}`);
      return of(result as T);
    }
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log("Got all the Heroes")),
      catchError(this.handlError<Hero[]>("Failed to get heroes", []))
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url).pipe(
      tap((foundHero) => this.log(`Found a hero ${foundHero.name}`)),
      catchError(this.handlError<Hero>("Failed to Find a HERO."))
    )
  }
  updateHero(hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    return this.http.put<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log('Update is Happy')),
      catchError(this.handlError<Hero>('Update Failed'))
    )
  }

  createHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero) => this.log('Created a Hero => ' + newHero.name)),
      catchError(this.handlError<Hero>('Create Failed')) 
    )
  }
}

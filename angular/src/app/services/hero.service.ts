import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

import {catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'api/heroes';

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
}

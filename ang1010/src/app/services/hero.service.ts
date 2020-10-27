import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../types/hero.type';
import { MessageService } from './message.service';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = 'api/heroes'

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
}

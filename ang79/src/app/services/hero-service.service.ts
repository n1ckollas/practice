import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    private http: HttpClient,
  ) { }

  private log(message: string){
    this.messageService.add(`HERO Service: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed with message ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      tap( _ => this.log("Fetched all the Heroes")),
      catchError(this.handleError<Hero[]>("Failed to Load Heroes")),
    )
  }

  getHero(id: number){
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero[]>(url).pipe(
      tap( _ => this.log("Fetched all the Heroes")),
      catchError(this.handleError<Hero[]>("Failed to Load Heroes")),
    )
  }



}

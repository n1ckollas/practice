import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heroes';
import { MessageService } from './message.service';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'}),
  }
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private log(message: string){
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed with error ${error.message}`)
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      tap(_ => this.log("Fetched all the Heroes")),
      catchError(this.handleError<Hero[]>("Failed to get Heroes", []))
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log("Fetched all the Heroes")),
      catchError(this.handleError<Hero>("Failed to get a Hero"))
    )
  }
  
}

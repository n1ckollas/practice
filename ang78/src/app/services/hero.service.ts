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
    this.messageService.add(`HERO SERVICE: ${message}`);
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

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap( _ => this.log(`Updated a hero`)),
      catchError(this.handleError<Hero>("Failed to update a Hero"))
    )
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap( _ => this.log(`Create  a hero => ${hero.name}`)),
      catchError(this.handleError<Hero>("Failed to create a Hero"))
    )
  }

  deleteHero(hero: Hero): Observable<any> {
    const id = typeof(hero) === 'number'? hero : hero.id;
    const url = `${ this.heroUrl }/${id}`;

    return this.http.delete<Hero>(url).pipe(
      tap( _ => this.log(`Deleted a hero => ${hero.name}`)),
      catchError(this.handleError<Hero>("Failed to delete a Hero"))
    )
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()){
      return of([])
    }
    return this.http.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
      tap( _ => this.log(`Found heroes`)),
      catchError(this.handleError<Hero[]>("Failed to Find a Hero"))
    )
  }



  
}

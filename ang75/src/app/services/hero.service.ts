import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  }
 
  constructor(
    private messageService: MessagesService,
    private http: HttpClient
  ) { }

  private log(message: string){
    this.messageService.add(`Hero Service: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      tap( _ => this.log("Fetched all the heroes")),
      catchError(this.handleError<Hero[]>("Failed to load Heroes", []))
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log("Found One Hero")),
      catchError(this.handleError<Hero>("This Hero was not found"))
    )
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('update failed'))
    )
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroUrl, hero, this.httpOptions).pipe(
      tap((hero: Hero) => this.log(`Added New hero ${hero.name}`)),
      catchError(this.handleError<any>('failed to add'))
    )
  }

  deleteHero(hero: Hero | number): Observable<any> { 
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap(() => this.log("Deleted!!!")),
      catchError(this.handleError<Hero>("No deletion accured."))
    )
  }

  searchHero(term: string): Observable<Hero[]> {
    if(!term.trim()){return of([])}
    const url = `${this.heroUrl}/?name=${term}`
    return this.http.get<Hero[]>(url, this.httpOptions).pipe(
      tap(_ => this.log("found the following heroes")),
      catchError(this.handleError<Hero[]>('Found Nothing', []))
    )
  }
}

import { Injectable } from '@angular/core';
import { Hero } from '../types/hero.type';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; 
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type": 'application/json'}),
  }

  constructor( 
    private messageService: MessagesService,
    private http: HttpClient,
  ) { }

  private log(message: string): void{
    this.messageService.add(`HeroService: ${message}`);
  }

  private handlError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed with error: ${error.message}`)
      return of(result as T);
    }

  }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap( _ => this.log("Got All heroes")),
      catchError(this.handlError<Hero[]>('Error while getting All heroes'))
    )
  }

  getHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((hero: Hero) => this.log(`found Hero => ${hero.name}`)),
      catchError(this.handlError<Hero>("Found Nothing"))
    )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap( _ => this.log(`Updated Hero ${hero.name}`)),
      catchError(this.handlError<Hero>('Update Failed'))
    )
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Added a new hero => ${newHero.name}`)),
      catchError(this.handlError<Hero>('Failed to create a hero'))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id =  typeof hero  === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap( _ => this.log("DELETED the hero")),
      catchError(this.handlError<Hero>("Failed to Delete"))
    )
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim){ return of([])} 
    const url = `${this.heroesUrl}/?name=${term}`;
    return this.http.get<Hero[]>(url).pipe(
      tap(_ => this.log(`found heroes matching : ${term}`)),
      catchError(this.handlError<Hero[]>('searchHeroes', [])),
    )
  }
}

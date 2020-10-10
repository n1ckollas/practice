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
  

}

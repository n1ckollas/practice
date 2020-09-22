import { Injectable } from '@angular/core';
import { Hero } from './types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { isDataSource } from '@angular/cdk/collections';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }


  private log(message: String){
    this.messageService.add(`Hero Service: ${message}`);
  }
  private handleError<T>(operation = 'operation', result? : T){
    return ( error: any): Observable<T> => {
      console.error(error);

      this.log(`operation ${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  getHeros(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return this.http.get<Hero[]>(this.heroUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    )
    
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero:Hero){
    return this.http.put(this.heroUrl, hero, httpOptions).pipe(
      tap( _ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  addHero(hero:Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Added a new hero with id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  searchHero(term: string): Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`Found heroes matching"${term}"`)),
      catchError(this.handleError<Hero[]>('Search Heroes', []))
    );
  }
}

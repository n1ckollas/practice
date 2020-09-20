import { Injectable } from '@angular/core';
import { Hero } from './types/hero.type';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { isDataSource } from '@angular/cdk/collections';


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
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.put(this.heroUrl, hero, httpOptions).pipe(
      tap( _ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }
}

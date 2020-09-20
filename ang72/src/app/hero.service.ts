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

  getHero(id: number){
    this.messageService.add("HeroService: fetching hero with id" + id);
    const url = this.heroUrl + '/' + id;

    return this.http.get<Hero>(this.heroUrl).pipe(
      tap(_ => this.log(`fetched hero id = ${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }
}

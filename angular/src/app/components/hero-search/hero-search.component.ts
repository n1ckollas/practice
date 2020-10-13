import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../types/hero.type';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; 
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {
  heroes$:Observable<Hero[]>;
  searchTerms$:Subject<string> = new Subject();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms$.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string) => this.heroService.searchHero(term))
    )
  }

}

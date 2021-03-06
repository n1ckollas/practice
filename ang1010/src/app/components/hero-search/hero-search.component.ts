import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/types/hero.type';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  searchTerms: Subject<string> = new Subject();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.heroService.searchHero(term))
    )
  } 

  search(term: string): void {
    this.searchTerms.next(term)
  }
}

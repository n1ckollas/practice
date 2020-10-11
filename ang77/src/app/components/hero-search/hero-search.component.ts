import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { Observable, Subject } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>
  searchTerm$ = new Subject<string>() 
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerm$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHero(term))
    )
  }

  search(term: string){
    this.searchTerm$.next(term)
  }

}

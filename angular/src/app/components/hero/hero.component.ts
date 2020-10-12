import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { HEROES } from 'src/app/types/mock-heroes';
import { Hero } from '../../types/hero.type';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onHeroSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  logName(value): void {
    console.log(value);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}

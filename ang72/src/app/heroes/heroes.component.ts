import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero.type';
import { HEROES } from '../types/mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }
  selectedHero: Hero;
  heroes = HEROES;
  constructor() { }

  ngOnInit() {}

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}

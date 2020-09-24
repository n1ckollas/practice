import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero.type';
import {HEROES} from '../types/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "Windstorm",
  }
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }

}

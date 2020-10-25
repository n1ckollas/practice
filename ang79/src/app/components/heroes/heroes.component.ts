import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { HEROES } from '../../types/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}

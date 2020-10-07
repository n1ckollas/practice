import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { HEROES } from '../../types/mock-heroes';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  selectedHero: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit() {}

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}

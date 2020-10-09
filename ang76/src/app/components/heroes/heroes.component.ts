import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { HEROES } from '../../types/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero){
    this.selectedHero = hero;
  }

}

import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/types/mock-heroes';
import { Hero } from '../../types/hero.type';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    name: "Windstorm",
    id: 1,
  }

  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  alertChange(event){
    console.log(event);
  }

}

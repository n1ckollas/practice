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
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
    
  }

}

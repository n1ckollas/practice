import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { HEROES } from '../../types/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = { name: 'Windstorm', id: 1};

  heroes:Hero[] = HEROES;
  
  constructor() { }

  ngOnInit() {
  }

}

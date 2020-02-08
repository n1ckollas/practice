import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero){
    this.selectedHero = hero;
  }
  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      })


  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../models/mock-heroes';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroe: Hero = {
    id: 1,
    name: "Zhytomir",
  }
  heroes: Hero[];
  selectedHero:Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    })
  }

}

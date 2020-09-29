import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero.type';
import {HeroService} from '../services/hero.service';


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
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    })
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

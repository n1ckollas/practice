import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
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

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  alertChange(event){
    console.log(event);
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string){
    name = name.trim();
    if(!name){ return }

    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

}

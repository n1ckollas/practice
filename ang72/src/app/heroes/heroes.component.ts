import { Component, OnInit } from '@angular/core';
import { Hero } from '../types/hero.type';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  add(name: String){
    name = name.trim();
    if(!name){return}
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

  delete(hero: Hero){
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

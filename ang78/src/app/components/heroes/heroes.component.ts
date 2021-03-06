import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../types/hero.type';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  hero: Hero = { name: 'windsor', id:33 };
  heroes: Hero[];
  selectedHero:Hero;
  
  constructor(private heroService: HeroService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  newName(event): void {
    console.log(event);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  saveHero(name: string): void{
    name = name.trim();
    if(!name){ return }
    
    this.heroService.createHero({ name } as Hero).subscribe(hero => this.heroes.push(hero));
  }

  deleteHero(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
    this.heroService.deleteHero(hero).subscribe();
  }
}

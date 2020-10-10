import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../types/hero.type';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero){
    this.selectedHero = hero;
  }

  nameChange(value){
    console.log(value);
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    if(!name.trim()){return}
    name = name.trim();

    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero))
  }
  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h.id !== hero.id)
    this.heroService.deleteHero(hero).subscribe();
  }

}

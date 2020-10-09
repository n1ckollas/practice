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

}

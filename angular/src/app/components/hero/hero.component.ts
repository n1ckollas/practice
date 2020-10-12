import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/types/mock-heroes';
import { Hero } from '../../types/hero.type';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero = {name:"windstorm", id: 33 }

  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}

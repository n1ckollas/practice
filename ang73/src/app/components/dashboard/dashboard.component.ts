import { Component, OnInit } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}

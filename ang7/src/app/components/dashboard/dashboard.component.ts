import { Component, OnInit } from '@angular/core';
import { Hero }  from '../../models/hero'
import { HeroService } from '../../services/hero.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService:HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes.push(heroes[1])
        this.heroes.push(heroes[2])
        this.heroes.push(heroes[3])
        this.heroes.push(heroes[4])
        this.heroes.push(heroes[5])
      }
      )}
}

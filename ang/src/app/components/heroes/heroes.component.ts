import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import {Hero} from '../../models/hero';
import { JsonService } from '../../services/json.service';
import * as fromStore from '../../store';
import { Store, Action} from '@ngrx/store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService:HeroService,
    private jsonService:JsonService,
    private store:Store<fromStore.TodosState>
  ) { }

  ngOnInit() {
    this.getHeroes()
    this.getTodo()
    this.store.dispatch(new fromStore.LoadTodos())
  }

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      })
  }
  getTodo(){
    this.jsonService.getTodo()
      .subscribe(todo => console.log(todo))
  }

}

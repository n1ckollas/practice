import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

import { Hero } from '../types/hero.type';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroId();
  }

  getHeroId(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe( hero => this.hero = hero);
    console.log(this.hero);
  }

  goBack(){
    this.location.back();
  }

  save(){
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}

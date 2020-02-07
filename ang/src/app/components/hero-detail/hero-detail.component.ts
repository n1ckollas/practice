import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from 'src/app/models/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService:HeroService,
  ) { }

  ngOnInit() {
    this.getHero()
  }
  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(){
    this.location.back();
  }

}

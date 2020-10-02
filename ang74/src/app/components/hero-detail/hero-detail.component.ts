import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/types/hero.type';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Output() change:EventEmitter<any> = new EventEmitter();

  hero:Hero;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private heroService: HeroService,
              ) { }

  ngOnInit() {
    this.getHero();
  }

  nameChanged(){
    this.change.emit(this.hero.name);
  }

  getHero(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(){
    this.location.back();
  }

}

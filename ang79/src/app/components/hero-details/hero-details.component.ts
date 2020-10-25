import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/types/hero.type';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  getHero(id: number){
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }
  
  goBack(): void {
    this.location.back();
  }

}

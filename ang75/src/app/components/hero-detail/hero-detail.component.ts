import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../types/hero.type';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() change:EventEmitter<any> = new EventEmitter();

  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  newName():void {
    this.change.emit(this.hero.name);
  }

  getHero(id): void {
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  back(): void {
    this.location.back();
  }
  save(hero: Hero): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.back());
  }

}

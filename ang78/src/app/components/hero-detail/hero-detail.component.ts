import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHeroById(id);
  }

  onChange(): void {
    this.change.emit(this.hero.name);
  }

  getHeroById(id:number){
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(): void{
    this.location.back();
  }
  
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(_ => this.goBack())
  }

}

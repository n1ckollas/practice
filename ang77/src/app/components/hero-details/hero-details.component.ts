import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/types/hero.type';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero:Hero;
  @Output() nameChange = new EventEmitter<any>();

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  onInput(){
    this.nameChange.emit(this.hero.name);
  }

  getHero(id: number): void{
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.back());
  }

  back(): void{
    this.location.back();
  }

}

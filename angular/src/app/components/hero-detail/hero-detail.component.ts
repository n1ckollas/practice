import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/types/hero.type';
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
  @Output() nameChange: EventEmitter<string> = new EventEmitter();

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  onNameChange(): void{
    this.nameChange.emit(this.hero.name);
  }

  getHero(id: number): void{
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  back(): void {
    this.location.back();
  }
  
  save(hero: Hero): void {
    this.heroService.updateHero(hero).subscribe(() => this.back());
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../types/hero.type';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() change:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  newName():void {
    this.change.emit(this.hero.name);
  }

}

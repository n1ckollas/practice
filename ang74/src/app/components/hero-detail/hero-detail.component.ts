import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/types/hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  @Output() change:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  nameChanged(){
    this.change.emit(this.hero.name);
  }

}

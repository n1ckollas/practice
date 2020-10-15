import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../types/hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.change.emit(this.hero.name);
  }

}

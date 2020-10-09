import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/types/hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  @Output() newName: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onInput(): void {
    this.newName.emit(this.hero.name);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/types/hero.type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() nameChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNameChange(): void{
    this.nameChange.emit(this.hero.name);
  }

}

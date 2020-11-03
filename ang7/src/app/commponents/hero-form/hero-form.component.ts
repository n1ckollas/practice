import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { Hero2 } from '../../models/hero2';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['really smart', 'super flexible', 'Super Hot', 'Wheather Changer'];
  model = new Hero2(18, 'Dr IQ', this.powers[2], 'Chuck overStreet');

  submitted = false;

  onSubmit() { this.submitted = true }

  constructor() { }

  ngOnInit() {
  }

  get diagnostic() { return JSON.stringify(this.model)}

  newHero() {
    this.model = new Hero2(42, '', '');
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

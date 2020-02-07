import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


//store setup
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { TodosAPI } from './store/api/todos.api';
import { effects } from './store';
import { todosReducers } from "./store/reducers/todos.reducers";
import { TodosComponent } from './components/todos/todos.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      todos: todosReducers
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    TodosAPI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

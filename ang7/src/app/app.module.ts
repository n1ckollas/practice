import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TodosComponent } from './components/todos/todos.component'
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//store setup
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { TodosAPI } from './store/api/todos.api';
import { effects } from './store';
import { todosReducers } from "./store/reducers/todos.reducers";
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodosComponent,
    DashboardComponent,
    MessagesComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      todos: todosReducers
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    TodosAPI,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

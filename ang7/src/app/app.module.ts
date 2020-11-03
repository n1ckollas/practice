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
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { HeroFormComponent } from './commponents/hero-form/hero-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TodosComponent,
    DashboardComponent,
    MessagesComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FormBuilderComponent,
    HeroFormComponent,
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

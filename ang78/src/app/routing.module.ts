import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
    {path:'', redirectTo:'heroes', pathMatch: 'full'},
    {path:'heroes', component:HeroesComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[]
})
export class AppRoutingModule { }
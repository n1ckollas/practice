import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent }
]

@NgModule({
  declarations: [],
  exports:[ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

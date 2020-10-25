import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes : Routes = [
    {path:'', redirectTo:'heroes', pathMatch:'full'},
    {path:'heroes', component: HeroesComponent},
    {path:'dashboard', component: DashboardComponent},
]


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

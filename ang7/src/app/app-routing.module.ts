import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TodosComponent } from './components/todos/todos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


const routes: Routes = [
  {path:'', redirectTo:'/heroes', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'todos', component:TodosComponent},
  {path:'detail/:id', component: HeroDetailComponent},
  {path:'reactive', component:ReactiveFormComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

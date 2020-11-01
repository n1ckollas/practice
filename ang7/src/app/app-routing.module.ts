import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TodosComponent } from './components/todos/todos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';


const routes: Routes = [
  {path:'', redirectTo:'/heroes', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'todos', component:TodosComponent},
  {path:'detail/:id', component: HeroDetailComponent},
  {path:'name-editor', component:NameEditorComponent},
  {path:'profile-editor', component:ProfileEditorComponent},
  {path:'form-builder', component:FormBuilderComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

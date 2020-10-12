import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
    {path:'', redirectTo:'/heroes', pathMatch: 'full'},
    {path:'heroes', component: HeroComponent},
    {path: 'dashboard', component: DashboardComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

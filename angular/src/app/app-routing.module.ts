import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
    {path:'heroes', component: HeroComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

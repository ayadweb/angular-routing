import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MeteoComponent } from './meteo/meteo.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'meteo', component:MeteoComponent},
  {path:'about',component:AboutComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BeercontainerComponent } from './../beers/beercontainer/beercontainer.component';
import { LoginComponent } from './../users/login/login.component';
import { HomeComponent } from '../overview/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent,  canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'my-beers', component: BeercontainerComponent,  canActivate: [AuthGuard]}
//   { path: 'games', loadChildren: 'app/games/games.module#GamesModule'} // Lazy Loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

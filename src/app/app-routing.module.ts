import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IsConnectedGuard } from './guards/is-connected.guard'

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [IsConnectedGuard]},
  {path: "login", component: LoginComponent},
  {path: "",pathMatch: 'full', redirectTo: "home"},
  {path: "*", component: HomeComponent, canActivate: [IsConnectedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

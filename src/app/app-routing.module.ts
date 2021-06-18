import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IsConnectedGuard } from './guards/is-connected.guard'

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [IsConnectedGuard]},
  {path: "changelog", component:ChangelogComponent, canActivate:[IsConnectedGuard]},
  {path: "login", component: LoginComponent},
  {path: "",pathMatch: 'full', redirectTo: "home"},
  {path: "*", component: HomeComponent, canActivate: [IsConnectedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

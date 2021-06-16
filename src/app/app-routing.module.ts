import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IsConnectedGuard } from './guards/is-connected.guard'

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [IsConnectedGuard]},
  {path: "login", component: LoginComponent},
  {path: "*", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GoalEditComponent } from './components/forms/goal-edit/goal-edit.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AuthGuard } from './components/shared/services/auth.guard';


const routes: Routes = [
  {path:'up',component:SignUpComponent},
  {path:'log',component:SignInComponent},
  {path:'dashboard', loadChildren:()=>import('./components/views/dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AuthGuard]},
  {path:'edit',component:GoalEditComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

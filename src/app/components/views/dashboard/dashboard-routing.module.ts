import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'home',component:MainComponent},
    {path:'journal',loadChildren:()=>import('../journal/journal.module').then(m=>m.JournalModule)},
    {path: 'goals',loadChildren:()=>import('../goal/goal.module').then(m=>m.GoalModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

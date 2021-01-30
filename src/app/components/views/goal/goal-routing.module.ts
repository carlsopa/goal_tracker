import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGoalComponent } from '../../forms/new-goal/new-goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalComponent } from './goal/goal.component';


const routes: Routes = [
  {path:'',component:GoalComponent,children:[
    {path:'create',component:NewGoalComponent},
    {path:'detail/:id',component: GoalDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalRoutingModule { }

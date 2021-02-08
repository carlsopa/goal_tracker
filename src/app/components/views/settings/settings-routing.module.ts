import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { JournalsComponent } from './journals/journals.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path:'',component:SettingsComponent,children:[
    {path:'goals',component:GoalsComponent},
    {path:'journals',component:JournalsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

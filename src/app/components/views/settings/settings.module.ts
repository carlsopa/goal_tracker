import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { GoalsComponent } from './goals/goals.component';
import { JournalsComponent } from './journals/journals.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [GoalsComponent, JournalsComponent, SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

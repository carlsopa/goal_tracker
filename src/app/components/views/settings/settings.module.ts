import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { GoalsComponent } from './goals/goals.component';
import { JournalsComponent } from './journals/journals.component';
import { SettingsComponent } from './settings/settings.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [GoalsComponent, JournalsComponent, SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class SettingsModule { }

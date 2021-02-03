import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NewGoalComponent } from '../../forms/new-goal/new-goal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [GoalComponent, GoalDetailComponent, GoalListComponent,NewGoalComponent],
  imports: [
    CommonModule,
    GoalRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ]
})
export class GoalModule { }

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoalsService } from '../../shared/services/goals.service';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.scss']
})
export class GoalEditComponent implements OnInit {
  GoalEditGroup = this.fb.group({
    uid:[''],
    gid:[''],
    title:[''],
    description:['']
  })
  uid: string
  gid: string
  title: string
  description: string
  
  descriptionData: string
  titleData: string
  userId: string
  goalId: string

  constructor(
    private fb: FormBuilder,
    private gs: GoalsService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.descriptionData = data.description
    this.titleData = data.title
    this.userId = data.user_id
    this.goalId = data.goal_id
   }

  ngOnInit(): void {
    this.GoalEditGroup.setValue({
      title: this.titleData,
      description: this.descriptionData,
      gid: this.goalId,
      uid: this.userId
    })
  }
  UpdateAction(){
    this.gs.UpdateGoal(this.GoalEditGroup.value)
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GoalEditComponent } from 'src/app/components/forms/goal-edit/goal-edit.component';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {
  goalData = null
  goalId: string
  userId: string

  constructor(private route: ActivatedRoute,
    private gs: GoalsService,
    private dialog: MatDialog,
    private as: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(d=>{
      this.as.user$.subscribe(u=>{
        this.gs.GetSingleGoal(d.id,u.uid).then(data=>{
          console.log(data)
          this.goalId = d.id
          this.userId = u.uid
          this.goalData = data
        })
      })
    })
  }
  OpenEditGoal(){
    const dialogRef = this.dialog.open(GoalEditComponent,{
      width:'250px',
      data:{
        title: this.goalData.title,
        description: this.goalData.description,
        category_id: this.goalData.category_id,
        goal_id: this.goalId,
        user_id: this.userId
      }
    })
  }

}

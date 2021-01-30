import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  goalList = null
  uid: string

  constructor(private as: AuthService,
    private gs: GoalsService) { }

  ngOnInit(): void {
    this.as.user$.subscribe(user=>{
      this.gs.GetGoals(user.uid).subscribe(data=>{
        this.goalList = data
        this.uid = user.uid
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewGoalComponent } from 'src/app/components/forms/new-goal/new-goal.component';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  public GoalInput

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.GoalInput = document.getElementById('GoalInput')

  }

  CheckStatus(){
    this.GoalInput.blur()
    const dialogRef = this.dialog.open(NewGoalComponent,{
      width:'500px'
    })
    
  }

}

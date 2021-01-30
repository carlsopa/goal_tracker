import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewGoalComponent } from 'src/app/components/forms/new-goal/new-goal.component';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  public JournalInput

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.JournalInput = document.getElementById('JournalInput')

  }
  OpenNewGoal(){
    const dialogRef = this.dialog.open(NewGoalComponent,{
      width:'250px'
    })
  }
  CheckStatus(){
    this.JournalInput.blur()
    const dialogRef = this.dialog.open(NewGoalComponent,{
      width:'500px'
    })
    
  }

}

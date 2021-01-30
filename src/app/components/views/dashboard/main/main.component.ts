import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  GoalDataSource: MatTableDataSource<any>
  JournalDataSource: MatTableDataSource<any>
  journals: any=[]
  goals: any=[]
  displayedColumns: any[]=[
    'title'
  ]
// journals: null
test= 'test string'
  constructor(
    public as: AuthService,
    public gs: GoalsService
  ) 
  { 
    this.as.user$.subscribe(user=>{
      this.gs.GetGoals(user.uid).subscribe(goal=>{
        goal.forEach(item => {
          this.goals.push(item.payload.doc.data())
        });
        this.GoalDataSource = new MatTableDataSource(this.goals) 
      })
      this.gs.GetJournals(user.uid).subscribe(journal=>{
        journal.forEach(item=>{
          this.journals.push(item.payload.doc.data())
        })
        this.JournalDataSource = new MatTableDataSource(this.journals)
      })
    })
  }
}

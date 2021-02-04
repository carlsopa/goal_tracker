import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DailyListComponent } from 'src/app/components/dialog/daily-list/daily-list.component';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  mobileQuery: MediaQueryList
  GoalDataSource: MatTableDataSource<any>
  JournalDataSource: MatTableDataSource<any>
  journals: any=[]
  goals: any=[]
  displayedColumns: any[]=[
    'title'
  ]
  DailyGoals: any=[]
  DailyGoalCount=0
  constructor(
    public dialog: MatDialog,
    public as: AuthService,
    public gs: GoalsService,
    ChangeDetector: ChangeDetectorRef,
    media: MediaMatcher
  ) 
  { this.mobileQuery = media.matchMedia('(max-width:600px)')
    this.as.user$.subscribe(user=>{
      this.gs.GetGoals(user.uid).subscribe(goal=>{
        goal.forEach(item => {
          const itemData = item.payload.doc
          if (itemData.data()['repeated']==='Daily'){
            this.DailyGoals.push({id:itemData.id,title:itemData.data()['title']})
            this.DailyGoalCount = this.DailyGoalCount+1
          }
        // //   console.log(item.payload.doc.data.description)
          this.goals.push(itemData.data())
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
  dailyClick(){
    const dialogRef = this.dialog.open(DailyListComponent,{width:'500px',data:{list:this.DailyGoals}})
  }
}

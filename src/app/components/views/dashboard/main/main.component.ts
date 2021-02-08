import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
  DailyCompleteCount=0
 
  constructor(
    public dialog: MatDialog,
    public as: AuthService,
    public gs: GoalsService,
    ChangeDetector: ChangeDetectorRef,
    media: MediaMatcher,
    public route: Router
  ) 
  { this.mobileQuery = media.matchMedia('(max-width:600px)')
    this.as.user$.subscribe(user=>{
      this.gs.GetGoals(user.uid).subscribe(goal=>{
        goal.forEach(item => {
          const itemData = item.payload.doc
          if (itemData.data()['repeated']==='Daily'){
            this.DailyGoals.push({id:itemData.id,title:itemData.data()['title']})
            this.DailyGoalCount = this.DailyGoalCount+1
          if (itemData.data()['completed']){
            this.DailyCompleteCount = this.DailyCompleteCount+1
          }
          }
        // //   console.log(item.payload.doc.data.description)
          // console.log(itemData.data())
          this.goals.push({data:itemData.data(),id:itemData.id})
        });
        this.GoalDataSource = new MatTableDataSource(this.goals) 
      })
      this.gs.GetJournals(user.uid).subscribe(journal=>{
        journal.forEach(item=>{
          this.journals.push({data:item.payload.doc.data(),id:item.payload.doc.id})
        })
        this.JournalDataSource = new MatTableDataSource(this.journals)
      })
    })
    
  }
  dailyClick(){
    const dialogRef = this.dialog.open(DailyListComponent,{width:'500px',data:{list:this.DailyGoals}})
  }
  GoalView(id){
    this.route.navigate(['dashboard/goals/detail/'+id])

  }
  JournalView(id){
    this.route.navigate(['dashboard/journal/detail/'+id])
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NoteViewComponent } from 'src/app/components/dialog/note-view/note-view.component';
import { GoalEditComponent } from 'src/app/components/forms/goal-edit/goal-edit.component';
import { NewNoteComponent } from 'src/app/components/forms/new-note/new-note.component';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {
  NoteDataSource: MatTableDataSource<any>
  goalData = null
  NoteList: any=[]
  goalId: string
  userId: string

  displayedColumns: any[]=[
    'date'
  ]

  constructor(private route: ActivatedRoute,
    private gs: GoalsService,
    private dialog: MatDialog,
    private as: AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(d=>{
      this.as.user$.subscribe(u=>{
        this.gs.GetNotes(d.id,u.uid).subscribe(data=>{
          data.forEach(note=>{
            this.NoteList.push({id: note.payload.doc.id,date:note.payload.doc.data()['date']})
          })
          console.log(this.NoteList)
          this.NoteDataSource = new MatTableDataSource(this.NoteList)
        })
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
  OpenAddNote(){
    const dialogRef = this.dialog.open(NewNoteComponent,{
      data:{
        title: this.goalData.title,
        description: this.goalData.description,
        goal_id: this.goalId,
        user_id: this.userId
      }
    })
  }
  OpenNoteView(id){
    const dialogRef = this.dialog.open(NoteViewComponent,{
      data:{
        note_id:id,
        goal_id: this.goalId,
        user_id: this.userId
      }
    })
  }

}

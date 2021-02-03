import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoalsService } from '../../shared/services/goals.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {
  title: string
  description: string
  note: string
  created: string

  constructor(@Inject(MAT_DIALOG_DATA)public data: any,
  public gs: GoalsService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.gs.GetSingleGoal(this.data.goal_id,this.data.user_id).then(data=>{
      this.title = data['title']
      this.description = data['description']
    })
    this.gs.GetSingleNote(this.data.user_id,this.data.goal_id,this.data.note_id).then(data=>{
      this.note = data['text']
      this.created = data['date']
    })
  }

}

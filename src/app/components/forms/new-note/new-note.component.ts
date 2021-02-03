import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GoalsService } from '../../shared/services/goals.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  NewNoteGroup = this.fb.group({
    text:[''],
  })
  text: string

  userId: string
  goalId: string

  constructor(@Inject(MAT_DIALOG_DATA)public data: any,private fb: FormBuilder, private gs: GoalsService) {
    this.userId = data.user_id
    this.goalId = data.goal_id
   }

  ngOnInit(): void {

  }
  NewNote(){
    this.gs.CreateNote(this.NewNoteGroup.value,this.userId,this.goalId)
  }

}

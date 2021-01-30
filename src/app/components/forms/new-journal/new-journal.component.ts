import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { GoalsService } from '../../shared/services/goals.service';

@Component({
  selector: 'app-new-journal',
  templateUrl: './new-journal.component.html',
  styleUrls: ['./new-journal.component.scss']
})
export class NewJournalComponent implements OnInit {
  NewJournalGroup = this.fb.group({
    title:[''],
    text:['']
  })
  userId: string

  constructor(private fb: FormBuilder,
    private gs: GoalsService,
    private as: AuthService) { }

  ngOnInit(): void {
    this.as.user$.subscribe(user=>{
      this.userId = user.uid
    })
  }
  onSubmit(){
    this.gs.CreateNewJournalEntry(this.NewJournalGroup.value,this.userId)
  }

}

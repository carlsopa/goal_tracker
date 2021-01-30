import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {
  journalList = null
  uid: string

  constructor(private as: AuthService,
    private gs: GoalsService) { }

  ngOnInit(): void {
    this.as.user$.subscribe(user=>{
      this.gs.GetJournals(user.uid).subscribe(data=>{
        this.journalList = data
        this.uid = user.uid
      })
    })
  }

}

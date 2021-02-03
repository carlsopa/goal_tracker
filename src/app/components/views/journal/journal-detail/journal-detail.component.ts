import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.scss']
})
export class JournalDetailComponent implements OnInit {
  journalData = null

  constructor(private route: ActivatedRoute,
    private as: AuthService,
    private gs: GoalsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(d=>{
      this.as.user$.subscribe(u=>{
        this.gs.GetSingleJournalEntry(u.uid,d.id).then(data=>{
          this.journalData = data
          console.log(data)
        })
      })
    })
  }

}

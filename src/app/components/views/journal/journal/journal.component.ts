import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewJournalComponent } from 'src/app/components/forms/new-journal/new-journal.component';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  createNew(){
    this.dialog.open(NewJournalComponent,{
      width:'260px'
    })

  }

}

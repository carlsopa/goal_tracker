import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { QuickViewComponent } from '../quick-view/quick-view.component';

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.scss']
})
export class DailyListComponent implements OnInit {

  daily: MatTableDataSource<any>
  displayedColumns: any[]=[
    'title'
  ]

  constructor(@Inject(MAT_DIALOG_DATA)public data: any,
  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.daily = new MatTableDataSource(this.data.list)
  }
  quickedit(id){
    this.dialog.open(QuickViewComponent,{width:'500px',data:{id:id}})
  }

}

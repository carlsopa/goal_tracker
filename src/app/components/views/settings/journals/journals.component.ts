import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { timeStamp } from 'console';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {

  journalList: any=[]
  JournalsData: MatTableDataSource<any>
  uid: string
  displayedColumns: string[]=['select','title','created']
  idList: any=[]
  // selection: SelectionModel<any>

  constructor(
    private as: AuthService,
    private gs: GoalsService
  ) { }

  ngOnInit(): void {
    this.as.user$.subscribe(user=>{
      this.uid = user.uid
      this.gs.GetJournals(user.uid).subscribe(data=>{
        data.forEach(item=>{
          const itemData = item.payload.doc
          this.journalList.push({checked:false,select:itemData.id,title:itemData.data()['title'],created:itemData.data()['date']})

        })
        this.JournalsData = new MatTableDataSource(this.journalList)

      })
    })
  }
  add(evt) {
    if(evt.source.checked){
      this.addId(evt.source.value)
    } else {
      this.removeId(evt.source.value)
    }
  }
 
  addId(id){
    this.idList.push(id)

  }
  removeId(id){
    const listIndex = (element) => element == id
    this.idList.splice(this.idList.findIndex(listIndex),1)
  }
  deletejournals(){
    this.gs.DeleteJournals(this.idList,this.uid)
  }

}
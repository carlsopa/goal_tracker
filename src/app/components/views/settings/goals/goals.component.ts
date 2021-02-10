import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import { timeStamp } from 'console';
import { AuthService } from 'src/app/components/shared/services/auth.service';
import { GoalsService } from 'src/app/components/shared/services/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goalList: any=[]
  GoalsData: MatTableDataSource<any>
  uid: string
  displayedColumns: string[]=['select','title','created']
  idList: any=[]
  selection: SelectionModel<any>

  constructor(
    private as: AuthService,
    private gs: GoalsService
  ) { }

  ngOnInit(): void {
    this.as.user$.subscribe(user=>{
      this.uid = user.uid
      this.gs.GetGoals(user.uid).subscribe(data=>{
        data.forEach(item=>{
          const itemData = item.payload.doc
          this.goalList.push({checked:false,select:itemData.id,title:itemData.data()['title'],created:itemData.data()['date']})

        })
        this.GoalsData = new MatTableDataSource(this.goalList)

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
  deletegoals(){
    this.gs.DeleteGoals(this.idList,this.uid)
  }

}

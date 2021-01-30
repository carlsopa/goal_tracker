import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { AuthService } from '../../shared/services/auth.service';
import { GoalsService } from '../../shared/services/goals.service';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  
  NewGoalFormGroup = this.fb.group({
    'category_id':['',[Validators.required]],
    'title':['',[Validators.required]],
    'description':['',[Validators.required]],
      'repeated': [''],
      'target': [''],
  })
  target: string
  uid: string
  category_id: string
  title: string
  description: string
  catId: string
  categoryList = []
  repeated: string
  Repetition: boolean
  datepicker: string

  Repeated: string=''
  Deration: string=''
  Target: string=''

  userid: string

  

  constructor(private fb: FormBuilder,
    private as: AuthService,
    private gs: GoalsService,
    public dialog: MatDialogRef<NewGoalComponent>) {
      
    }

  ngOnInit(): void {
    this.gs.GetCategories().subscribe(cat=>{
      for(let c of cat){
        this.categoryList.push({value:c.payload.doc.id,category:c.payload.doc.data()['category']})
      }
    })
    this.as.user$.subscribe(user=>{
      this.userid = user.uid
    })
  }
  onSubmit(){
    if(this.Repeated=='yes'){
      this.NewGoalFormGroup.patchValue({
        repeated: this.Deration
      })
    } else {
      this.NewGoalFormGroup.patchValue({
        target: new Date(this.Target).toLocaleDateString()
      })
    }
    this.gs.CreateNewGoal(this.NewGoalFormGroup.value,this.userid)
  }
  radioChange(event: MatRadioChange){
    if(event.source.name=='Yes/No'){
      this.Repetition = event.value
    }
    console.log(typeof(this.Repetition))

  }
  

}

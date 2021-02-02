import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { GoalsService } from '../../shared/services/goals.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  goalData = null
  goalTitle = ''
  goalDescription = ''
  uid =''

  constructor(public as: AuthService,
    public gs: GoalsService,
    public route: Router,
    public aroute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit(): void {
    // console.log(this.data)
    this.as.user$.subscribe(user=>{
      this.uid = user.uid
      this.gs.GetSingleGoal(this.data.id,user.uid).then(data=>{
        
        this.goalTitle = data['title']
        this.goalDescription = data['description']
      })
    })
    
  }
  goalComplete(){
    this.gs.CompleteGoal(this.data.id,this.uid)

  }
  goalEdit(){
    console.log('edit')
    this.route.navigate(['dashboard/goals/detail/'+this.data.id])

  }

}

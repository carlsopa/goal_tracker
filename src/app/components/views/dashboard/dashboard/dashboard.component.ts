import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from 'src/app/components/shared/interfaces/user/user';
import { AuthService } from 'src/app/components/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList
  display: string
  isShown:boolean=false
  constructor(private as: AuthService,
    ChangeDetector: ChangeDetectorRef,
    media: MediaMatcher
    ) {this.mobileQuery = media.matchMedia('(max-width:600px)') }
  ngOnInit(): void {
    this.as.user$.subscribe(user=>{
      this.display = user.displayName
    })
  }
  toggle(){
    this.isShown = !this.isShown
  }
  LogOut(){
    this.as.LogOut()
  }

}

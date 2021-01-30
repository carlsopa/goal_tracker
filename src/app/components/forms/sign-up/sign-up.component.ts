import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  SignUpGroup = this.fb.group({
    firstName:[''],
    lastName:[''],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private as: AuthService) { }

  ngOnInit(): void {
  }
  SignUp(){
    this.as.SignUp(this.SignUpGroup.value)
  }
}

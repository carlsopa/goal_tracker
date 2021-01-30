import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  SignInGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private as: AuthService) { }

  ngOnInit(): void {
  }
  SignIn(){
    console.log('sign in')
    this.as.SignIn(this.SignInGroup.value.email,this.SignInGroup.value.password)
  }
}
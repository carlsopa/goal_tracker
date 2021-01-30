import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User>
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router
  ) { 
    this.user$ = afAuth.authState
  }
  SignIn(email,password){
    return this.afAuth.signInWithEmailAndPassword(email,password).then((result)=>{
      this.router.navigate(['/dashboard/home'])
    })

  }
  SignUp(data){
    console.log(data.email)
    return this.afAuth.createUserWithEmailAndPassword(data.email,data.password)
    .then((result)=>{
      result.user.updateProfile({
        displayName: data.firstName+' '+data.lastName,
        photoURL: null
      })
      this.SetUserDataStructure(data,result.user)
    }).catch((error)=>{
      console.log(error.message)
    })
  }
  SetUserDataStructure(data,user){
    let userRef: AngularFirestoreDocument<any> = this.afs.doc(`data/${user.uid}/demographics/data`)
    const userData: User = {
      uid: user.uid,
      email: user.email,
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.firstName+' '+data.lastName
    }
    return userRef.set(userData,{
      merge:true
    })
  }
  LogOut(){
    this.afAuth.signOut()
    this.router.navigate(['/'])
  }
}

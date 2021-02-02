import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user/user';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
 
  constructor(private fs: AngularFirestore,
    ) {}
  CreateNewGoal(data,id){
    data['date']=new Date().toLocaleDateString()
    data['time']=new Date().toLocaleTimeString()
    this.fs.collection(`data/${id}/goals/`).add(data) 
  }
  GetCategories(){
    return this.fs.collection('resolution_categories').snapshotChanges()
  }
  GetGoals(id){
    return this.fs.collection(`data/${id}/goals`).snapshotChanges()
  }
  GetGoalList(id){
    return this.fs.collection(`data/${id}/goals`)
  }
  GetSingleGoal(gid,id){
    return this.fs.collection(`data/${id}/goals`).doc(gid).ref.get().then(doc=>{
      return doc.data()
    })
  }
  UpdateGoal(data){
    this.fs.collection(`data/${data.uid}/goals`).doc(data.gid).update({
      title: data.title,
      description: 
      data.description,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()})
  }
  CompleteGoal(gid,id){
    this.fs.collection(`data/${id}/goals`).doc(gid).update({
      completed: true
    })
  }
  CreateNewJournalEntry(data,id){
    data['date']=new Date().toLocaleDateString()
    data['time']=new Date().toLocaleTimeString()
    this.fs.collection(`data/${id}/journals`).add(data)
  }
  GetJournals(id){
    return this.fs.collection(`data/${id}/journals`).snapshotChanges()

  }
  GetSingleJournalEntry(){

  }
  UpdateJournalEntry(data){

  }

}
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
      updated_date: new Date().toLocaleDateString(),
      updated_time: new Date().toLocaleTimeString()})
  }
  CompleteGoal(gid,id){
    this.fs.collection(`data/${id}/goals`).doc(gid).update({
      completed: true,
      updated_date: new Date().toLocaleDateString(),
      updated_time: new Date().toLocaleTimeString()
    })
  }
  DeleteGoals(lst,id){
    lst.map(x=>{
      this.fs.collection(`data/${id}/goals`).doc(x).delete().then(()=>{
        console.log('you deleted records')
      }).catch((error)=>{
        console.log('something went wrong')
      })
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
  GetSingleJournalEntry(id,jid){
    return this.fs.collection(`data/${id}/journals`).doc(jid).ref.get().then(doc=>{
      return doc.data()
    })

  }
  CreateNote(data,id,gid){
    data['date']=new Date().toLocaleDateString()
    data['time']=new Date().toLocaleTimeString()
    this.fs.collection(`data/${id}/goals/${gid}/notes`).add(data)

    
  }
  GetNotes(gid,id){
    return this.fs.collection(`data/${id}/goals/${gid}/notes`).snapshotChanges()

  }
  GetSingleNote(id,gid,nid){
    return this.fs.collection(`data/${id}/goals/${gid}/notes`).doc(nid).ref.get().then(doc=>{
      return doc.data()
    })

  }

}

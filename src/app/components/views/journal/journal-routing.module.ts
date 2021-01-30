import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalDetailComponent } from './journal-detail/journal-detail.component';
import { JournalComponent } from './journal/journal.component';


const routes: Routes = [
  {path:'',component:JournalComponent},
  {path:'detail/:id',component: JournalDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalRoutingModule { }

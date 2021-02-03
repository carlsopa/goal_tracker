import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewGoalComponent } from './components/forms/new-goal/new-goal.component';
import { GoalEditComponent } from './components/forms/goal-edit/goal-edit.component';
import { SignInComponent } from './components/forms/sign-in/sign-in.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from '@angular/fire';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './components/shared/services/auth.service';
import { DashboardComponent } from './components/views/dashboard/dashboard/dashboard.component';
import { NewJournalComponent } from './components/forms/new-journal/new-journal.component';
import { NewNoteComponent } from './components/forms/new-note/new-note.component';
import { DailyListComponent } from './components/dialog/daily-list/daily-list.component';
import { QuickViewComponent } from './components/dialog/quick-view/quick-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NoteViewComponent } from './components/dialog/note-view/note-view.component';

@NgModule({
  declarations: [
    AppComponent,
    // NewGoalComponent,
    GoalEditComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    NewJournalComponent,
    NewNoteComponent,
    DailyListComponent,
    QuickViewComponent,
    NoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

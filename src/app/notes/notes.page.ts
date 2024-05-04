import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notes',
  templateUrl: 'notes.page.html',
  styleUrls: ['notes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, FormsModule]
})

export class NotesPage {

  constructor(private router: Router) {}

  goToHomePage() 
  {
    this.router.navigate(['/home']);
  }

  goToCalendarPage()
  {
    this.router.navigate(['/calendar']);
  }

  goToNotesPage(){
    this.router.navigate(['/notes']);
  }

}

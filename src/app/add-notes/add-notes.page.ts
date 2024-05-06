import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, IonDatetime, 
  IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-notes',
  templateUrl: 'add-notes.page.html',
  styleUrls: ['add-notes.page.scss'],
  standalone: true,
  imports: [IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, IonDatetime, 
    IonCard, IonCardHeader, IonCardContent ],
})

export class AddNotesPage {

  constructor(private router: Router) {}
  
  goToAddNotePage(){
    this.router.navigate(['/add-notes']);
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  goToCalendarPage() {
    this.router.navigate(['/calendar']);
  }

  goToNotesPage() {
    this.router.navigate(['/notes']);
  }

}

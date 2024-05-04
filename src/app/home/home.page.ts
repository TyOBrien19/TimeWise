import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, FormsModule]
})

export class HomePage  {

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
  
  item1: string = '';
  item2: string = '';
  item3: string = '';
  item4: string = '';
  item5: string = '';
  item6: string = '';
  item7: string = '';
  item8: string = '';
  item9: string = '';
  item10: string = '';
  item11: string = '';
  // Define other item variables if needed

  clearInputs() {
    this.item1 = '';
    this.item2 = '';
    this.item3 = '';
    this.item4 = '';
    this.item5 = '';
    this.item6 = '';
    this.item7 = '';
    this.item8 = '';
    this.item9 = '';
    this.item10 = '';
    this.item11 = '';
    // Clear other item variables if needed
  }

}

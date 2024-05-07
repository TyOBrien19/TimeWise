import { Component, NgModule, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonCardContent, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TimerPage {

  constructor(private router: Router) { }


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

  goToTimerPage(){
    this.router.navigate(['/timer']);
  }

}

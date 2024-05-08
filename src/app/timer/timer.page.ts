import { Component, NgModule, OnInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, 
  IonCardContent, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonCardContent, IonCardHeader, IonCard, 
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class TimerPage {
  studyTime: number = 25 * 60;
  breakTime: number = 5 * 60;
  timerStudy: any;
  timerBreak: any;


  //Reference: https://www.youtube.com/watch?v=cDZ2HjBOxrw&t=822s
  //inspiration, instead of having a stopwatch its a timer that counts
  //down for 25 minutes

  startTimer25() {
    if (this.timerStudy) {
      clearInterval(this.timerStudy);
    }
    this.timerStudy = setInterval(() => {
      this.studyTime--;
      if (this.studyTime <= 0) {
        this.resetTimer25();
      }
    }, 1000);
  }

  pauseTimer25() {
    clearInterval(this.timerStudy);
    this.timerStudy = null;
  }

  resetTimer25() {
    clearInterval(this.timerStudy);
    this.timerStudy = null;
    this.studyTime = 25 * 60;
  }


  startTimer5() {
    if (this.timerBreak) {
      clearInterval(this.timerBreak);
    }
    this.timerBreak = setInterval(() => {
      this.breakTime--;
      if (this.breakTime <= 0) {
        this.resetTimer5();
      }
    }, 1000);
  }

  pauseTimer5() {
    clearInterval(this.timerBreak);
    this.timerBreak = null;
  }

  resetTimer5() {
    clearInterval(this.timerBreak);
    this.timerBreak = null;
    this.breakTime = 5 * 60;
  }

  calculateTime(): { minutesStudy: number, secondsStudy: string, minutesBreak: number, secondsBreak: string } {
    const minutesStudy = Math.floor(this.studyTime / 60);
    const secondsStudy = ('0' + (this.studyTime % 60)).slice(-2);
    const minutesBreak = Math.floor(this.breakTime / 60);
    const secondsBreak = ('0' + (this.breakTime % 60)).slice(-2);
    return { minutesStudy, secondsStudy, minutesBreak, secondsBreak };
  }


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

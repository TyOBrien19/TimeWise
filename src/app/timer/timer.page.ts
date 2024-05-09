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
  studyTime: number = 25 * 60; //25 minutes in seconds
  breakTime: number = 5 * 60; //5 minutes in seconds
  timerStudy: any;
  timerBreak: any;


  //Reference: https://www.youtube.com/watch?v=cDZ2HjBOxrw&t=822s
  //inspiration, instead of having a stopwatch its a timer that counts down from 25 minutes
  //Uses Ionics built in setInterval, clearInterval

  startTimer25() {
    //If the timer is running and user clicks start it wont start a new interval
    if (this.timerStudy) {
      clearInterval(this.timerStudy);
    }
    //Else new timer started 
    this.timerStudy = setInterval(() => {
      this.studyTime--; //Minuses study time every iteration
      if (this.studyTime <= 0) { //Resets timer once it is done
        this.resetTimer25();
      }
    }, 1000); //Counts down in milliseconds
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


  startTimer5() { //Same mechanism as abpve but for 5 minutes
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

  
//Timers are counting down from the total seconds of each timer
//This function fromats it into minutes and seconds for being displayed
//Math.floor makes sure we are using whole numbers
//.slice(-2) is to ensure that even when the time is e.g. 22 minutes it will display 22:00 with 2 digits after the colon

  calculateTime(): { minutesStudy: number, secondsStudy: string, minutesBreak: number, secondsBreak: string } {
    const minutesStudy = Math.floor(this.studyTime / 60);
    const secondsStudy = ('0' + (this.studyTime % 60)).slice(-2);
    const minutesBreak = Math.floor(this.breakTime / 60);
    const secondsBreak = ('0' + (this.breakTime % 60)).slice(-2);
    
    return { minutesStudy, secondsStudy, minutesBreak, secondsBreak };
  }


  constructor(private router: Router) { }

  //Navigation

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

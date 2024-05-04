import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service'


import {IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, IonDatetime, 
  IonDatetimeButton, IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  providers: [WeatherService],
  standalone: true,

  imports: [NgIf, CommonModule, IonCardContent, IonCardHeader, IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
    IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, 
    FormsModule, IonDatetime, IonDatetimeButton, IonCard]
})

export class CalendarPage {
  weatherData: any;

  constructor(
    private router: Router,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weatherService.GetWeatherData('Galway').subscribe(
      data => {
        this.weatherData = data;
        console.log(this.weatherData);
      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }

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

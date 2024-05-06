import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { Geolocation } from '@capacitor/geolocation';

import {IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonList, IonCheckbox, IonDatetime, 
  IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  providers: [WeatherService],
  standalone: true,

  imports: [NgIf, CommonModule, IonCardContent, IonCardHeader, IonHeader, 
    IonFooter, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, 
    IonInput, IonButton, IonList, IonCheckbox, FormsModule, IonDatetime, IonCard]
})

export class CalendarPage {
  weatherData: any;
  lat: number;
  long: number;

  constructor(
    private router: Router,
    private weatherService: WeatherService
  ) {
    this.lat = 53.2745;
    this.long = -9.049;
  }

  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.longitude;
    this.getWeatherByCoordinates();
  }

  async getWeatherByCoordinates() {
    try {
      const weatherData = await this.weatherService.GetWeatherData({ lat: this.lat, long: this.long }).toPromise();
      const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);
      this.weatherData = {
        ...weatherData,
        main: {
          ...weatherData.main,
          temp: temperatureCelsius
        }
      };
      console.log(this.weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  ngOnInit() {
    this.getGPS(); // Call getGPS() when the component initializes to fetch weather based on current location
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

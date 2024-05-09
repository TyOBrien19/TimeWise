import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { Geolocation } from '@capacitor/geolocation';
import { Storage } from '@ionic/storage-angular';

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
  /* Variables */
  weatherData: any; /* Stores weather data of 'any' type */
  lat: number; 
  long: number; 
  dates: {}[] = []; /* An array to store weather data */

  constructor(
    private router: Router,
    private weatherService: WeatherService,
    private storage: Storage

  ) {
    /* Sets default location to Eyre Squares coordinates */
    this.lat = 53.2745;
    this.long = -9.049;

    /* Initilises Ionics storage */
    this.storage.create().then(() => {
      this.storage.get('dates').then((data) => {
        this.dates = data || []; /* Gets data if there is none is creates an emoty array */
      });
    });
  }

  /* Gets users location */
  /* Reference: Lecture Notes */
  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.longitude;
    this.getWeatherByCoordinates();
  }

  async getWeatherByCoordinates() {
    try {
      //Calls upon the weather.service.ts which holds the API, passess in the lat and long from Geolocation
      const weatherData = await this.weatherService.GetWeatherData({ lat: this.lat, long: this.long }).toPromise();
      //Changes temperature from kelvin to celsius
      const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(2);
      this.weatherData = {
      //Spread operator unpacks data from API to get specific data that we need
      //Spread Refrence: https://www.w3schools.com/howto/howto_js_spread_operator.asp
                      // https://stackabuse.com/spread-operator-in-javascript/
                      
        ...weatherData,
        main: {
          ...weatherData.main,
          temp: temperatureCelsius
        }
      };
      console.log(this.weatherData);

      //If getWeatherByCoordinates fails logs it to console
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }


  //Gets storage and places it in the storedDates array
  async getStoredDates() {
    const storedDates = await this.storage.get('dates');
    this.dates = storedDates || [];
  }

  storeDates() {
    this.storage.set('dates', this.dates);
    this.storeDates();
  }

  ngOnInit() {
    //When app runs get Geolocation and get storage
    this.getGPS();
    this.storage.create().then(() => {
      this.getStoredDates();
    });
  }
  

  //Navigation using ionic 'Router' 
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

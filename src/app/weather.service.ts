import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  //openWeatherMap API
  apiKey = 'e74a4693661dc1194ff64d5e5f01798f';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  GetWeatherData(coordinates: { lat: number; long: number }): Observable<any> {
    const { lat, long } = coordinates;
    //Get weather data from API, this service is passed in the lat and long from the calendar.page.ts file
    const url = `${this.apiUrl}?lat=${lat}&lon=${long}&appid=${this.apiKey}`;
    //Returns a URL so that calendar.page.ts ca`n use it
    return this.http.get(url);
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  apiKey = 'e74a4693661dc1194ff64d5e5f01798f'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key

  constructor(private httpClient: HttpClient) { }

  GetWeatherData(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.httpClient.get(apiUrl);
  }
}

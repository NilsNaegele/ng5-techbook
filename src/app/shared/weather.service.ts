import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

interface WeatherApiResponse {
  query: {
    count: number;
    created: string;
    lang: string;
    results: {
      channel: {
        item: {
          condition: {
            code: string;
            temp: string;
          }
        }
      }
    }
  };
}

export interface WeatherInformation {
  city: string;
  code: number;
  temperature: number;
}

export interface City {
    name: string;
    imageSrc: string;
    woeId: string;
}

@Injectable()
export class WeatherService {
  cities = [
    { name: 'Berlin', imageSrc: '../assets/cities/berlin.jpg', woeId: '638242' },
    { name: 'London', imageSrc: '../assets/cities/london.jpg', woeId: '44418' },
    { name: 'Paris',  imageSrc: '../assets/cities/paris.jpg', woeId: '615702' },
    { name: 'New York', imageSrc: '../assets/cities/newyork.jpg', woeId: '2459115' },
    { name: 'Tokyo',   imageSrc: '../assets/cities/tokyo.jpg', woeId: '1118370' },
    { name: 'Bogota', imageSrc: '../assets/cities/bogota.jpg', woeId: '368148' },
    { name: 'Cape Town', imageSrc: '../assets/cities/capetown.jpg', woeId: '1591691' },
    { name: 'New Delhi', imageSrc: '../assets/cities/newdelhi.jpg', woeId: '28743736' },
    { name: 'Sydney', imageSrc: '../assets/cities/sydney.jpg', woeId: '1105779' },
    { name: 'Vancouver', imageSrc: '../assets/cities/vancouver.jpg', woeId: '9807' }
  ];

  constructor(private http: Http) { }

  getWeather(woeId: string) {
    const url = this.generateWeatherUrl(woeId);
    return this.http.get(url).toPromise()
                    .then(a => {
                          const apiResponse = a.json() as WeatherApiResponse;
                          const weather = apiResponse.query.results.channel.item.condition;
                          return {
                            city: this.getCityName(woeId),
                            code: Number(weather.code),
                            temperature: this.FahrenheitToCelsius(Number(weather.temp))
                          } as WeatherInformation;
                    });

  }

  private generateWeatherUrl(woeId: string) {
      // return `http://localhost:4200/weather/${woeId}`;
      return `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid="${woeId}"&format=json`;
  }

  private getCityName(woeId: string) {
    const matches = this.cities.filter(x => x.woeId === woeId);
    return matches.length === 1 ? matches[0].name : undefined;
  }

  private FahrenheitToCelsius(temp: number) {
    return Math.round((temp - 32) / (9 / 5));
  }


}

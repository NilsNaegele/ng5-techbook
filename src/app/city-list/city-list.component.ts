import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../shared/weather.service';
import { ActivatedRoute } from '@angular/router';

interface City {
  name: string;
  imageSrc: string;
  woeId: string;
}

interface WeatherInformation {
  city: string;
  code: number;
  temperature: number;
}

@Component({
  selector: 'app-weather',
  template: `
        <div class="weather-component">
              <h2 *ngIf="!weatherExists()">Loading ...</h2>
              <h2 *ngIf="weatherExists()">Current conditions in {{ weather.city }}:</h2>
              <h3 *ngIf="weatherExists()" class="weather">{{ weather.temperature }}°C
              <i class="wi wi-day-sunny"></i>
              </h3>
        </div>
  `,
  styles: [``]
})
export class WeatherComponent implements OnInit {
  weather: WeatherInformation = undefined;

  weatherExists() {
    return !!this.weather;
  }

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const woeId = params['woeId'];
      console.log(woeId);
      this.weatherService.getWeather(woeId).then((w) => this.weather = w);
    });
  }

}

@Component({
  selector: 'app-city-list',
  template: `
          <div class="row city-list">
              <div class="col-xs-12">
                  <div class="row well" *ngFor="let city of cities">
                      <a [routerLink]="[city.woeId]">
                          <div class="col-xs-6">
                               <h3>{{ city.name }}</h3>
                          </div>
                          <div class="col-xs-6">
                                <img class="city-image" src="{{ city.imageSrc }}"
                                 height="80" width="80">
                          </div>
                      </a>
                  </div>
              </div>
          </div>
  `,
  styles: [``]
})
export class CityListComponent implements OnInit {
  cities: City[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.cities = this.weatherService.cities;
  }

}

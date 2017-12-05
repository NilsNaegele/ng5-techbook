import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  template: `
  <app-header (featureSelected)="onNavigate($event)"></app-header>
  <div class="container">
   <div class="row">
      <div class="col-md-8" style="width: 750px !important;">
        <app-recipes *ngIf="selectedFeature === 'recipe'"></app-recipes>
        <app-technology-list *ngIf="selectedFeature === 'technology-list'"></app-technology-list>
      </div>
      <div class="col-md-4" style="float: right;">
        <app-polymer-princess></app-polymer-princess>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
  `,
  styles: [`
  `]
})
export class AppComponent {
      selectedFeature = 'recipe';
      onNavigate(feature) {
        this.selectedFeature = feature;
      }
}





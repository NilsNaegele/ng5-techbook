import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="container">
   <div class="row">
      <div class="col-md-8" style="width: 750px !important;">
        <router-outlet></router-outlet>
      </div>
      <div class="col-md-4" style="float: right;">
        <app-polymer-princess [type]="'book'"></app-polymer-princess>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
      selectedFeature = 'recipe';
      onNavigate(feature) {
        this.selectedFeature = feature;
      }

      constructor() {
       }

      ngOnInit() {

      }

}





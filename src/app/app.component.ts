import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="container">
   <div class="row">
      <div [class]="colWidth" [style]="width">
        <router-outlet></router-outlet>
      </div>
      <div *ngIf="!hideInitialContainer" class="col-md-4" style="float: right;">
        <app-polymer-princess [type]="'book'"></app-polymer-princess>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
      hideInitialContainer = false;
      colWidth = 'col-md-8';
      width = 'width: 750px !important;';
      constructor(private router: Router) {}

      ngOnInit() {
        this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
          if (event.url === '/sentiments' || event.url === '/tweets'
              || event.url === '/youtube' || event.url === '/soundcloud') {
                this.hideInitialContainer = true;
                this.colWidth = 'col-md-12';
                this.width = 'width: 100%;';
           } else {
             this.hideInitialContainer = false;
             this.colWidth = 'col-md-8';
             this.width = 'width: 750px !important;';

           }
          }
        });
      }
}





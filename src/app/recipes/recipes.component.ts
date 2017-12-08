import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipes',
  template: `
          <div class="row">
              <div class="col-md-5">
                  <app-recipes-list></app-recipes-list>
              </div>
              <div class="col-md-7">
                 <router-outlet></router-outlet>
              </div>
          </div>
  `,
  styles: [``]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

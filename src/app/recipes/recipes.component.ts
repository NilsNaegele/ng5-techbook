import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipes.service';

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
  providers: [RecipeService],
  styles: [``]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

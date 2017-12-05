import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  template: `
          <div class="row">
              <div class="col-md-5">
                  <app-recipes-list (selectedRecipe)="selectedRecipe = $event"></app-recipes-list>
              </div>
              <div class="col-md-7">
                  <app-recipes-detail *ngIf="selectedRecipe; else infoText"
                  [recipe]="selectedRecipe">
                  </app-recipes-detail>
                  <ng-template #infoText>
                      <p>Please select a recipe</p>
                  </ng-template>
              </div>
          </div>
  `,
  styles: [``]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;


  constructor() { }

  ngOnInit() {
  }

}

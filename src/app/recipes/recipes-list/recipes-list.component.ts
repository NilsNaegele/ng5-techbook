import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';


@Component({
  selector: 'app-recipes-list',
  template: `
        <div class="row">
            <div class="col-xs-12">
                  <button class="btn btn-success">New Recipe</button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                  <app-recipe-item *ngFor="let recipe of recipes"
                  [recipe]="recipe" (selectedRecipe)="onSelected(recipe)"></app-recipe-item>
            </div>
        </div>
  `,
  styles: [``]
})
export class RecipesListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 123', 'This is the test description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe 456', 'This is the test description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  onSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}

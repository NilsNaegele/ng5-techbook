import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { TechnologyListService } from './../technology-list/technology-list.service';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      'Angular 5',
      'SPA Platform',
      'https://angular.io/assets/images/logos/angular/angular.png',
      [
        new Ingredient('Modules', 80),
        new Ingredient('Components', 100),
        new Ingredient('Templates', 90),
        new Ingredient('Metadata', 77),
        new Ingredient('Data Binding', 83),
        new Ingredient('Directives', 98),
        new Ingredient('Services', 88),
        new Ingredient('Dependency Injection', 99)
      ]),
    new Recipe(
      'Angular CLI 1.6',
      'Build Angular',
      'https://user-images.githubusercontent.com/9148799/27636989-d35548ec-5c2f-11e7-8add-7d68d8d82eee.png',
      [
        new Ingredient('Webpack', 70),
        new Ingredient('Schematics', 80),
        new Ingredient('Bazel', 95),
        new Ingredient('Closure', 99),
        new Ingredient('Node Modules', 77),
        new Ingredient('Protractor', 88),
        new Ingredient('Karma', 99)
      ]),
      new Recipe(
        'Angular Material 5',
        'Material Design Components',
        'https://cdn.geekwire.com/wp-content/uploads/2015/01/code-fellows-logo-shield-266x300.png',
        [
          new Ingredient('Form Controls', 98),
          new Ingredient('Navigation', 88),
          new Ingredient('Layout', 91),
          new Ingredient('Buttons/Indicators', 87),
          new Ingredient('Popups/Modals', 83),
          new Ingredient('Data Tables', 98)
    ])
  ];

  constructor(private technologyListService: TechnologyListService) { }

  setReceipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(idx: number) {
    return this.recipes[idx];
  }

  addIngredientsToechnologyList(ingredients: Ingredient[]) {
    this.technologyListService.addTechnologies(ingredients);
  }

  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}

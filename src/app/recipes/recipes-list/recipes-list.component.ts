import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipes-list',
  template: `
        <div class="row">
            <div class="col-xs-12">
                  <button class="btn btn-success" (click)="onNewRecipe()">New Recipe</button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                  <app-recipe-item *ngFor="let recipe of recipes; let i = index;"
                  [recipe]="recipe" [index]="i"></app-recipe-item>
            </div>
        </div>
  `,
  styles: [``]
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router, private route: ActivatedRoute) { }

  onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnInit() {
   this.recipeSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
      this.recipeSubscription.unsubscribe();
  }

}

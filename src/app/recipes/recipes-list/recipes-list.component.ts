import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipes.service';

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
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router, private route: ActivatedRoute) { }

  onNewRecipe() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}

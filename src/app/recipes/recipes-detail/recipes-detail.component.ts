import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  template: `
          <div class="row">
                <div class="col-xs-12">
                      <img [src]="recipe.imagePath"
                           alt="{{ recipe.name }}"
                           class="img-responsive"
                           style="max-height: 300px;">
                </div>
          </div>
          <div class="row">
                  <div class="col-xs-12">
                      <h1>{{ recipe.name }}</h1>
                  </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
                <div class="btn-group" appDropdown>
                    <button type="button" class="btn btn-primary dropdown-toggle">
                      Manage Recipe
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                          <li><a (click)="onAddToTechnologyList()" style="cursor: pointer">To Technology List</a></li>
                          <li><a style="cursor: pointer" (click)="onEditRecipe()">Edit Recipe</a></li>
                          <li><a style="cursor: pointer">Delete Recipe</a></li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="row">
              <div class="col-xs-12">
                  {{ recipe.description }}
              </div>
          </div>
          <div class="row">
              <div class="col-xs-12">
                  <ul class="list-group">
                      <li *ngFor="let ingredient of recipe.ingredients" class="list-group-item">
                            {{ ingredient.name }} - {{ ingredient.amount }}
                      </li>
                  </ul>
              </div>
          </div>
  `,
  styles: [``]
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.params.subscribe(
      (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                  });
  }

  onAddToTechnologyList() {
      this.recipeService.addIngredientsToechnologyList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route});
  }

}

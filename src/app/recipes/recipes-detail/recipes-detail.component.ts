import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

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
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle">
                      Manage Recipe
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                          <li><a href="#">To Technology List</a></li>
                          <li><a href="#">Edit Recipe</a></li>
                          <li><a href="#">Delete Recipe</a></li>
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
                  Ingredients
              </div>
          </div>
  `,
  styles: [``]
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}

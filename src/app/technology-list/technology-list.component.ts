import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { TechnologyListService } from './technology-list.service';

@Component({
  selector: 'app-technology-list',
  template: `
          <div class="row">
              <div class="col-xs-10">
                  <app-technology-edit
                  (technologyAdded)="onTechnologyAdded($event)">
                  </app-technology-edit>
                  <hr>
                  <ul class="list-group">
                        <a *ngFor="let ingredient of ingredients"
                            class="list-group-item" style="cursor: pointer">
                            {{ ingredient.name }} ({{ ingredient.amount }})
                        </a>
                  </ul>
              </div>
          </div>
  `,
  styles: [``]
})
export class TechnologyListComponent implements OnInit {
  ingredients: Array<Ingredient> = [];

  onTechnologyAdded(technology: Ingredient) {
    this.technologyListService.addTechnology(technology);
  }

  constructor(private technologyListService: TechnologyListService) { }

  ngOnInit() {
    this.ingredients = this.technologyListService.getIngredients();
    this.technologyListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}

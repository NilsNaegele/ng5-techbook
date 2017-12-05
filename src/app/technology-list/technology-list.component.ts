import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

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
  ingredients: Ingredient[] = [
      new Ingredient('JavaScript', 5),
      new Ingredient('HTML', 10),
      new Ingredient('CSS', 25)
  ];

  onTechnologyAdded(technology: Ingredient) {
    this.ingredients.push(technology);
  }

  constructor() { }

  ngOnInit() {
  }

}

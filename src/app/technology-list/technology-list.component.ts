import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { TechnologyListService } from './technology-list.service';
import { Subscription } from 'rxjs/Subscription';

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
                        <a *ngFor="let ingredient of ingredients; let i = index;"
                            (click)="onEditItem(i)"
                            class="list-group-item" style="cursor: pointer">
                            {{ ingredient.name }} ({{ ingredient.amount }})
                        </a>
                  </ul>
              </div>
          </div>
  `,
  styles: [``]
})
export class TechnologyListComponent implements OnInit, OnDestroy {
  ingredients: Array<Ingredient> = [];
  private ingredientsSubscription: Subscription;

  onTechnologyAdded(technology: Ingredient) {
    this.technologyListService.addTechnology(technology);
  }

  constructor(private technologyListService: TechnologyListService) { }

  onEditItem(index: number) {
      this.technologyListService.startedEditing.next(index);
  }

  ngOnInit() {
    this.ingredients = this.technologyListService.getIngredients();
    this.ingredientsSubscription = this.technologyListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

}

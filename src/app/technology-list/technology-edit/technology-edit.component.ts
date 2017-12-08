import { NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { TechnologyListService } from './../technology-list.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-technology-edit',
  template: `
            <div class="row">
                <div class="col-xs-12">
                    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                        <div class="row">
                              <div class="col-sm-5 form-group">
                                    <label for="name">Name</label>
                                    <input
                                      type="text"
                                      id="name"
                                      class="form-control"
                                      name="name"
                                      ngModel
                                      required
                                      >
                              </div>
                              <div class="col-sm-2 form-group">
                                    <label for="amount">Amount</label>
                                    <input
                                      type="number"
                                      id="amount"
                                      class="form-control"
                                      name="amount"
                                      ngModel
                                      required
                                      pattern="^[1-9]+[0-9]*$">
                              </div>
                        </div>
                        <div class="row">
                                <div class="col-xs-12">
                                      <button
                                        class="btn btn-success"
                                        [disabled]="!f.valid"
                                        type="submit">
                                        {{ editMode ? 'Update' : 'Add' }}
                                        </button>
                                      <button
                                      (click)="onDelete()"
                                      *ngIf="editMode"
                                      class="btn btn-danger"
                                      type="button">
                                      Delete
                                      </button>
                                      <button (click)="onClear()" class="btn btn-primary" type="button">Clear</button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
  `,
  styles: [``]
})
export class TechnologyEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') technologyListForm: NgForm;
  editingSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
    if (value.name === '' || value.amount === null) { return; }
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.technologyListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.technologyListService.addTechnology(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  constructor(private technologyListService: TechnologyListService) { }

  ngOnInit() {
   this.editingSubscription =
   this.technologyListService.startedEditing.subscribe(
     (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.technologyListService.getIngredient(index);
        this.technologyListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
     }
   );
  }

  onClear() {
    this.technologyListForm.reset();
    this.editMode = false;
  }

  onDelete() {
      this.technologyListService.deleteIngredient(this.editedItemIndex);
      this.onClear();

  }

  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }

}

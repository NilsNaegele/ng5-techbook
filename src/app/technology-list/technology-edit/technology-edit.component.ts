import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-technology-edit',
  template: `
            <div class="row">
                <div class="col-xs-12">
                    <form>
                        <div class="row">
                              <div class="col-sm-5 form-group">
                                    <label for="name">Name</label>
                                    <input
                                      type="text"
                                      id="name"
                                      class="form-control"
                                      #nameInput>
                              </div>
                              <div class="col-sm-2 form-group">
                                    <label for="amount">Amount</label>
                                    <input
                                      type="number"
                                      id="amount"
                                      class="form-control"
                                      #amountInput>
                              </div>
                        </div>
                        <div class="row">
                                <div class="col-xs-12">
                                      <button
                                        class="btn btn-success"
                                        type="submit"
                                        (click)="onAddItem()">
                                        Add
                                        </button>
                                      <button class="btn btn-danger" type="button">Delete</button>
                                      <button class="btn btn-primary" type="button">Clear</button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
  `,
  styles: [``]
})
export class TechnologyEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() technologyAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.technologyAdded.emit(new Ingredient(ingName, ingAmount));
  }

  constructor() { }

  ngOnInit() {
  }

}

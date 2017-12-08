import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class TechnologyListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('JavaScript', 5),
    new Ingredient('ES6', 100),
    new Ingredient('HTML', 10),
    new Ingredient('CSS', 25)
  ];

addTechnology(technology: Ingredient) {
  console.log(technology);
  this.ingredients.push(technology);
  this.ingredientsChanged.next(this.ingredients.slice());
}

getIngredients() {
  return this.ingredients.slice();
}

getIngredient(index: number) {
  return this.ingredients[index];
}

addTechnologies(technologies: Ingredient[]) {
  for (const technology of technologies) {
    const res = this.ingredients.filter(t => t.name === technology.name);
    if (res.length > 0) {
      return;
    }
  }
  this.ingredients.push(...technologies);
  this.ingredientsChanged.next(this.ingredients.slice());
}

updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
}

deleteIngredient(index: number) {
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
}


}


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyListComponent } from './technology-list/technology-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { WeatherComponent, CityListComponent } from './city-list/city-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipesDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
  ]},
  { path: 'technology-list', component: TechnologyListComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'weather', component: CityListComponent },
  { path: 'weather/:woeId', component: WeatherComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

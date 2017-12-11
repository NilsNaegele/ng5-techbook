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
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { LoginFormComponent } from './chat/login-form/login-form.component';
import { SignupFormComponent } from './chat/signup-form/signup-form.component';
import { AnalysisTweetsComponent } from './tweets/analysis-tweets/analysis-tweets.component';
import { YoutubeSearchComponent } from './youtube/youtube-search/youtube-search.component';
import { InfoComponent } from './tweets/info/info.component';

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
  { path: 'weather/:woeId', component: WeatherComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'chat', component: ChatRoomComponent },
  { path: 'sentiments', component: InfoComponent },
  { path: 'tweets', component: AnalysisTweetsComponent },
  { path: 'youtube', component: YoutubeSearchComponent },
  { path: '**', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PolymerPrincessComponent } from './polymer-princess/polymer-princess.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { TechnologyListComponent } from './technology-list/technology-list.component';
import { TechnologyEditComponent } from './technology-list/technology-edit/technology-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { NumberDirective } from './number.directive';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { DefaultComponent } from './default/default.component';
import { ArticleComponent } from './article/article.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { EnhancedHighlightDirective } from './enhanced-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './users.service';
import { AccountService } from './accounts.service';
import { TechnologyListService } from './technology-list/technology-list.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerOneComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PolymerPrincessComponent,
    FooterComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    TechnologyListComponent,
    TechnologyEditComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    NumberDirective,
    ArticleComponent,
    DefaultComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    HighlightDirective,
    EnhancedHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerOneComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountService, LoggingService, UsersService, TechnologyListService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

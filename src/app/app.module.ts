import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'angular2-moment';
import { NgProgressModule } from 'ngx-progressbar';

import { environment } from '../environments/environment';

import { RouterModule, Routes } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PolymerPrincessComponent } from './polymer-princess/polymer-princess.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
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
import { UsersObservableService } from './usersObservable.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';
import { RecipeService } from './recipes/recipes.service';
import { NetworksComponent } from './networks/networks.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
import { HttpComponent } from './http/http.component';
import { ServerService } from './server.service';
import { DataStorageService } from './shared/data-storage.service';
import { ImagesComponent } from './images/images.component';
import { CityListComponent, WeatherComponent } from './city-list/city-list.component';
import { WeatherService } from './shared/weather.service';
import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { FeedComponent } from './chat/feed/feed.component';
import { MessageComponent } from './chat/message/message.component';
import { LoginFormComponent } from './chat/login-form/login-form.component';
import { SignupFormComponent } from './chat/signup-form/signup-form.component';
import { NavbarComponent } from './chat/navbar/navbar.component';
import { UserListComponent } from './chat/user-list/user-list.component';
import { UserItemComponent } from './chat/user-item/user-item.component';
import { InfoComponent } from './tweets/info/info.component';
import { ResultComponent } from './tweets/result/result.component';
import { AnalysisTweetsComponent } from './tweets/analysis-tweets/analysis-tweets.component';
import { TweetHttpService } from './tweets/tweet-http.service';
import { AuthService } from './chat/auth.service';
import { ChatService } from './chat/chat.service';
import { YoutubeSearchComponent } from './youtube/youtube-search/youtube-search.component';
import { YoutubeSearchResultComponent } from './youtube/youtube-search-result/youtube-search-result.component';
import { YouTubeSearchService } from './youtube/youtube-search.service';
import { YouTubeSearchBoxComponent } from './youtube/youtube-search-box/youtube-search-box.component';
import { youTubeSearchInjectables } from './youtube/youtube-search-injectables';
import { TrackContainerComponent } from './soundcloud/track-container/track-container.component';
import { TrackListComponent } from './soundcloud/track-list/track-list.component';
import { TrackButtonComponent } from './soundcloud/track-button/track-button.component';
import { TrackSearchComponent } from './soundcloud/track-search/track-search.component';
import { SoundCloudService } from './soundcloud/soundcloud.service';

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
    RecipeEditComponent,
    SimpleFormComponent,
    SimpleReactiveFormComponent,
    NetworksComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HttpComponent,
    ImagesComponent,
    CityListComponent,
    WeatherComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    InfoComponent,
    ResultComponent,
    AnalysisTweetsComponent,
    YoutubeSearchComponent,
    YoutubeSearchResultComponent,
    YouTubeSearchBoxComponent,
    TrackContainerComponent,
    TrackListComponent,
    TrackButtonComponent,
    TrackSearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    ParticlesModule,
    ChartsModule,
    MomentModule,
    NgProgressModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AccountService, LoggingService, UsersService, TechnologyListService,
              ServersService, UsersObservableService, RecipeService, ServerService,
              DataStorageService, WeatherService, ChatService, AuthService,
              TweetHttpService, youTubeSearchInjectables, SoundCloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }

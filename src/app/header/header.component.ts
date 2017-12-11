import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import * as firebase from 'firebase/app';

import { AuthService } from '../chat/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  template: `
            <nav class="navbar navbar-default">
                  <div class="container-fluid">
                        <div class="navbar-header">
                            <a routerLink="/" class="navbar-brand">
                                Technology Book
                            </a>
                        </div>
                        <div class="navbar-default">
                            <ul class="nav navbar-nav">
                               <li routerLinkActive="active">
                                  <a routerLink="/recipes">Recipes</a>
                               </li>
                               <li routerLinkActive="active">
                                  <a routerLink="/technology-list">Technology List</a>
                               </li>
                               <li routerLinkActive="active">
                                  <a routerLink="/images">Images</a>
                               </li>
                               <li routerLinkActive="active">
                               <a routerLink="/weather">World Weather
                                <i class="wi wi-day-sunny"></i>
                               </a>
                              </li>
                              <li routerLinkActive="active">
                                  <a *ngIf="!(user | async)?.uid" routerLink="/login">Login</a>
                              </li>
                              <li routerLinkActive="active">
                                  <a *ngIf="!(user | async)?.uid" routerLink="/signup">Sign Up</a>
                              </li>
                              <li routerLinkActive="active">
                                <a id="userEmail" *ngIf="(user | async)?.uid">Hi {{ userEmail }}</a>
                              </li>
                              <li routerLinkActive="active">
                                <a *ngIf="(user | async)?.uid" (click)="logout()">Logout</a>
                              </li>
                              <li routerLinkActive="active">
                                  <a routerLink="/sentiments">Sentiments</a>
                              </li>
                              <li routerLinkActive="active">
                                  <a routerLink="/youtube">Youtube</a>
                              </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown" appDropdown>
                                <a style="cursor: pointer;" class="dropdown-toggle" role="button">
                                Manage <span class="caret"></span>
                                </a>
                                        <ul class="dropdown-menu">
                                            <li><a (click)="onSaveData()" style="cursor: pointer;">Save Data</a></li>
                                            <li><a (click)="onFetchData()" style="cursor: pointer;">Fetch Data</a></li>
                                        </ul>
                                  </li>
                            </ul>
                        </div>
                  </div>
            </nav>
  `,
  styles: [`
  .navbar-default {
    background-color: #ff9999;
    }
    .navbar-default .navbar-brand {
      color: #fff;
    }
    .navbar-default .navbar-nav>li>a {
      color: #fff;
    }
    .active {
      background-color: #ff4d4d;
    }
    .navbar-nav>.active>a {
      background-color: transparent;
  }
  .nav .open>a, .nav .open>a:focus, .nav .open>a:hover {
    background-color: #ff4d4d;
  }
  `]
})
export class HeaderComponent implements OnInit {
  user: Observable<firebase.User>;
  userEmail: string;

  constructor(private authService: AuthService, private router: Router,
              private dataStorageService: DataStorageService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => { console.log(response); });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/images']);
  }

  ngOnInit() {
    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

}

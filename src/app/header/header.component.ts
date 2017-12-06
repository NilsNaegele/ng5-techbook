import { Component } from '@angular/core';


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
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown" appDropdown>
                                <a style="cursor: pointer;" class="dropdown-toggle" role="button">
                                Manage <span class="caret"></span>
                                </a>
                                        <ul class="dropdown-menu">
                                            <li><a style="cursor: pointer;">Save Data</a></li>
                                            <li><a style="cursor: pointer;">Fetch Data</a></li>
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
export class HeaderComponent {

}

import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
            <nav class="navbar navbar-default">
                  <div class="container-fluid">
                        <div class="navbar-header">
                            <a href="#" class="navbar-brand">
                                Technology Book
                            </a>
                        </div>
                        <div class="navbar-default">
                            <ul class="nav navbar-nav">
                               <li>
                                  <a href="#" (click)="onSelect('recipe')">Recipes</a>
                               </li>
                               <li>
                                  <a href="#" (click)="onSelect('technology-list')">Technology List</a>
                               </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" role="button">
                                Manage <span class="caret"></span>
                                </a>
                            </li>
                                  <li class="dropdown">
                                        <ul class="dropdown-menu">
                                            <li><a href="#">Save Data</a></li>
                                            <li><a href="#">Fetch Data</a></li>
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
  `]
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string): void {
        this.featureSelected.emit(feature);
  }

}

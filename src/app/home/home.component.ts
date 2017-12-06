import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
        <h4>Welcome to Server Manager 6.0</h4>
        <p>Manage your Servers and Users</p>
        <button class="btn btn-primary" (click)="onLoadServer(1)">Load Server 1</button>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
   this.router.navigate(['/servers', id, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

}

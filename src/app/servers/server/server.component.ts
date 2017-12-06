import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server-one',
  template: `
            <h5>{{ server?.name }}</h5>
            <p>Server status is {{ server?.status }}</p>
            <button class="btn btn-primary" (click)="onEdit()">Edit Server</button>
  `,
  styleUrls: ['./server.component.css']
})
export class ServerOneComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
    });
  }

  onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.route});
  }

}

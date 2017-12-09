import { Component, OnInit } from '@angular/core';
import { ServerService } from './../server.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  appName = this.serverService.getAppName();
  servers = [
      {
        name: 'TestServer',
        capacity: 10,
        id: this.generateId()
      },
      {
        name: 'LiveServer',
        capacity: 100,
        id: this.generateId()
      }
  ];

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
            .subscribe(
              (response) => console.log(response),
              (error) => console.log(error)
            );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => this.servers = servers,
      (error) => console.log(error)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

}

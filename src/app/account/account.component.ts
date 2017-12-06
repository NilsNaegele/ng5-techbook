import { AccountService } from './../accounts.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  template: `
      <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
              <h5>{{ account.name }}</h5>
              <hr>
              <p>This account is {{ account.status }}</p>
              <button class="btn btn-default" (click)="onSetTo('active')">Set to 'active'</button>
              <button class="btn btn-default" (click)="onSetTo('inactive')">Set to 'inactive'</button>
              <button class="btn btn-default" (click)="onSetTo('unknown')">Set to 'unknown'</button>
          </div>
      </div>
  `,
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }

  ngOnInit() {
  }

}

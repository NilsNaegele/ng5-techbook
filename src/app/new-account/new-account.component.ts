import { AccountService } from './../accounts.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-new-account',
  template: `
        <div class="col-xs-12 col-md-8 col-md-offset-2">
            <div class="form-group">
                  <label>Account Name</label>
                  <input type="text" class="form-control" #account>
            </div>
            <div class="form-group">
                <select class="form-control" #status>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="hidden">Hidden</option>
                </select>
            </div>
            <button class="btn btn-primary" (click)="onCreateAccount(account.value, status.value)">
             Add Account
            </button>
  `,
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('New Status: ' + status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }

  ngOnInit() {
  }

}

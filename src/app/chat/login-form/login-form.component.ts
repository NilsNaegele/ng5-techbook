import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  login() {
     console.log(this.email, this.password);
    this.authService.login(this.email, this.password);
  }

  ngOnInit() {
  }

}

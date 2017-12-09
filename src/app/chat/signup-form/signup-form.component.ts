import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  email = '';
  password = '';
  displayName = '';
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    console.log(email, password, displayName);
    this.authService.signUp(email, password, displayName)
                    .then(resolve => this.router.navigate(['chat'])).catch(error => this.errorMsg = error.message);
  }

}

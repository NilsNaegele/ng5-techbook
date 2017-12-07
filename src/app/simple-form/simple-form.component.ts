import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  submitted = false;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
      username: '',
      email: '',
      secretQuestion: '',
      answer: '',
      gender: ''
  };

  suggestedUserName() {
    const suggestedName = 'Batman';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}

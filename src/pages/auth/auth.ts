import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage {
  authForm: FormGroup;
  constructor(
    public nav: NavController,
    public formBuilder: FormBuilder
  ) {

    this.nav = nav;
    this.authForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onSubmit(value: any): void {
    if (this.authForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);
      this.nav.push('MenuPage');
    }
  }
}

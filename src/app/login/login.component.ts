import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authStatus: boolean;
  public user: User;
  userForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
    this.initform();
  }
  onSignIn() {

    this.authService.signIn().then(
      () => {
        //const newLocal = new User({email:"",pwd:""});
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['user']);
      }
    );
    this.onSubmitForm();
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
  initform() {
    this.userForm = this.formbuilder.group({
      pwd: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      null,
      formValue['email'],

      formValue['pwd'],

    );
    console.log(newUser);
  }
}

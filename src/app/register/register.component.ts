import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.models';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  userForm: FormGroup;
  constructor(private formbuilder: FormBuilder , private usersevice:UserService, private router:Router) { }

  ngOnInit(): void {
    this.initform();
  }
  initform() {
    this.userForm = this.formbuilder.group({
      username:['', Validators.required],
      pwd: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['username'],
      formValue['email'],

      formValue['pwd'],

    );
    console.log(newUser);
    this.usersevice.addUser(newUser);
  }
  onRegister(){
    this.onSubmitForm()
    this.router.navigate(['Home']);
  }
  
}

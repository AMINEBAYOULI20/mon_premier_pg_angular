import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss']
})
export class ResetpwdComponent implements OnInit {
  restForm: FormGroup;
  constructor(private usersevice:UserService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initform();
  }
  initform() {
    this.restForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  getpwd(){
    const formValue = this.restForm.value;
    console.log(formValue);
  }
}

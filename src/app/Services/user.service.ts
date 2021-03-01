
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.models';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User[] = [
    {
      username: 'aminebayouli',
      email: 'amine@gmail.com',
      pwd: 'a1234',
    },
    {
      username: 'bayouliamine',
      email: 'bayouli@gmail.com',
      pwd: 'a12356',
    }
  ];
  data:Observable<User>
 

  addUser(user: User) {
    this.users.push(user);
   
  }
 
}
import { Component, OnInit } from '@angular/core';
import { ObserviceService } from '../Services/observice.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data : Array<any>
  constructor(private usersevice: UserService, private observice:ObserviceService) {
    this.data=new Array<any>();
  }

  ngOnInit(): void {
    this.getuserfromservice();
  }
  getuserfromservice(){
    this.data=this.usersevice.users;
  }
  obs(){
    this.observice.creatsub().subscribe(
      next=>{
        console.log(next);
      },
      error =>{
        console.log(error);
      },
      ()=>{
        console.log('done');
      }
      
    )
  }
  
}



import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../Services/jsonplaceholder.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data : Array<any>
  constructor(private JSONPlacehoderService:JsonplaceholderService) { 
    this.data=new Array<any>();
  }

  ngOnInit(): void {
    this.getdatafromapi();
  }
  getdatafromapi(){
    this.JSONPlacehoderService.getdata().subscribe((data)=>{
      console.log(data);
      this.data=data;
    })
  }

}

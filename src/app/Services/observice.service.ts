import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObserviceService {
  data : Observable <string>
  constructor() { }
  creatsub(){
    this.data =new Observable(obser=>{
      setTimeout(() => {
        obser.next("amine")
      },1000);
      setTimeout(() => {
        obser.next("bayouli")
      },2000);
      setTimeout(() => {
        obser.complete();
      },4000);
    })
    return this.data;
  }
}

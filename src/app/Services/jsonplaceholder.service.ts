import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private Http : HttpClient) { }
  getdata():Observable<any>{
    const url="http://jsonplaceholder.typicode.com/users"
    return this.Http.get<any>(url);

  }
}

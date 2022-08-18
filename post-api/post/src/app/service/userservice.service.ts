import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) {}
  saveUsers(data:any){
    return this.http.post('http://localhost:3000/posts',data)
  }

  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  users(){
    return [
      {users : "Jay", age:22, email:'jay@test.com'},
      {users : "Jayzzz", age:23, email:'jay@testt.com'},
      {users : "Jayzz", age:24, email:'jay@testttt.com'},
      {users : "Jayz", age:25, email:'jay@testtttt.com'}
    ]
}
}

import { Component } from '@angular/core';
import { UserserviceService } from './service/userservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api';

  users:any
  constructor(private userData:UserserviceService){
    userData.users().subscribe((data)=>{
      this.users =data
    })
}
}
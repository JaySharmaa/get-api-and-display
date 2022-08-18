import { Component } from '@angular/core';
import { UserserviceService } from './service/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post';

  constructor (private userData:UserserviceService){}
  getUserFormData(data:any){
    // console.warn(data)
    this.userData.saveUsers(data).subscribe((result)=>{
      console.warn(result)
    })
  }
  
 
}

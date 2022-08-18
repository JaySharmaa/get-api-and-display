import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any
  constructor(private userData:UserserviceService){
    userData.users().subscribe((data)=>{
      this.users =data
    })
}

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  file: any;
  constructor(private userData: UserserviceService) {
    console.log('userData', userData.users());
    this.file = userData.users();
  }

  ngOnInit(): void {
  }

}
